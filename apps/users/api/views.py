from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from rest_framework import viewsets 
from apps.users.models import User
from .serializers import UserSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from django.http import HttpResponse
from django.contrib.auth.models import Group
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.middleware import get_user
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.views import APIView
import requests
from rest_framework.utils import json
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.hashers import make_password
from django.utils import timezone
from django.conf import settings
from django_rest_passwordreset.signals import reset_password_token_created
from django.dispatch import receiver
from django.urls import reverse
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives




class UserView(viewsets.ModelViewSet):
    parser_classes = (MultiPartParser, FormParser)

    serializer_class = UserSerializer
    queryset = User.objects.all().order_by('id')

    def perform_create(self, serializer):
        instance = serializer.save()
        instance.set_password(instance.password)
        instance.save()

    def perform_update(self, serializer):
        instance = serializer.save()
        instance.set_password(instance.password)
        instance.save()

@api_view(['GET'])   
def current_user(request):
    user = get_user(request)
    if user.is_authenticated:
        serializer = UserSerializer(user)
    else:
        jwt_authentication = JSONWebTokenAuthentication()
        if jwt_authentication.get_jwt_value(request):
            user, jwt = jwt_authentication.authenticate(request)
            print(user)
        serializer = UserSerializer(user)   
    return Response(serializer.data)


class GoogleView(APIView):
    def post(self, request):
        payload = {'access_token': request.data.get("token")}  # validate the token
        r = requests.get('https://www.googleapis.com/oauth2/v2/userinfo', params=payload)
        data = json.loads(r.text)

        # return Response(data)
        if 'error' in data:
            content = {'message': 'wrong google token / this google token is already expired.'}
            return Response(content)

        # create user if not exist
        try:
            user = User.objects.get(email=data['email'])
        except User.DoesNotExist:
            user = User()
            user.first_name = data['given_name']
            user.last_name = data['family_name']
            user.username = data['email']
            user.email = data['email']
            user.image = data['picture']
            user.password = make_password(BaseUserManager().make_random_password())
            user.email = data['email']
            user.phone2 = '0000000000'
            user.date_joined = timezone.now()
            user.is_staff = False
            user.is_active = True
            user.is_superuser = False
            user.save()

        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)
        serializer = UserSerializer(user) 
        response_data = {}
        response_data['token'] = token
        response_data['access_token'] = request.data.get("token")
        response_data['user'] = serializer.data
        return Response(response_data)  
        return Response(response)



class FacebokView(APIView):
    def post(self, request):
        app_id = settings.SOCIAL_AUTH_FACEBOOK_KEY
        app_secret = settings.SOCIAL_AUTH_FACEBOOK_SECRET
        grant_type = 'client_credentials'
        
        access_token_url = "https://graph.facebook.com/oauth/access_token?client_id={}&client_secret={}&grant_type={}".format(app_id, app_secret, grant_type)
        r = requests.get(access_token_url)
        data = json.loads(r.text)

        if 'error' in data:
            content = {'message': 'wrong facebook token / this facebook token is already expired.'}
            return Response(content)

        input_token = request.data.get("token")
        access_token = data['access_token']
        access_token_url = "https://graph.facebook.com/debug_token?input_token={}&access_token={}".format(input_token, access_token)
        r = requests.get(access_token_url)
        data = json.loads(r.text)

        if 'error' in data['data']:
            content = {'message': 'wrong facebook token / this facebook token is already expired.'}
            return Response(content)

        # create user if not exist
        try:
            user = User.objects.get(email=request.data.get("email"))
        except User.DoesNotExist:
            user = User()
            user.first_name = request.data.get("first_name")
            user.last_name = request.data.get("last_name")
            user.username = request.data.get("email")
            user.email = request.data.get("email")
            # user.image = data['picture']
            user.password = make_password(BaseUserManager().make_random_password())
            user.email = request.data.get("email")
            user.phone2 = '0000000000'
            user.date_joined = timezone.now()
            user.is_staff = False
            user.is_active = True
            user.is_superuser = False
            user.save()

        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)
        serializer = UserSerializer(user) 
        response_data = {}
        response_data['token'] = token
        response_data['access_token'] = request.data.get("token")
        response_data['user'] = serializer.data
        return Response(response_data)  
        return Response(response)

@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
    """
    Handles password reset tokens
    When a token is created, an e-mail needs to be sent to the user
    :param sender: View Class that sent the signal
    :param instance: View Instance that sent the signal
    :param reset_password_token: Token Model Object
    :param args:
    :param kwargs:
    :return:
    """
    # send an e-mail to the user
    context = {
        'current_user': reset_password_token.user,
        'username': reset_password_token.user.username,
        'email': reset_password_token.user.email,
        'token': reset_password_token.key,
        'reset_password_url': "{}?token={}".format(reverse('users:password_reset:reset-password-request'), reset_password_token.key)
    }

    # render email text
    email_html_message = render_to_string('user_reset_password.html', context)
    email_plaintext_message = render_to_string('user_reset_password.txt', context)

    msg = EmailMultiAlternatives(
        # title:
        "Password Reset for {title}".format(title="Some website title"),
        # message:
        email_plaintext_message,
        # from:
        "noreply@somehost.local",
        # to:
        [reset_password_token.user.email]
    )
    msg.attach_alternative(email_html_message, "text/html")
    msg.send()
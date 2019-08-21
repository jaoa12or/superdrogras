from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from rest_framework import viewsets 
from apps.users.models import User
from .serializers import UserSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from django.http import HttpResponse
from django.contrib.auth.models import Group



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
    
def current_user(request):
    print(request.user)
    serializer = UserSerializer(request.user)
    print(serializer.data)
    return Response(serializer.data)
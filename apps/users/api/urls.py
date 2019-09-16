from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token

router = DefaultRouter()
router.register(r'', UserView, base_name='users')

urlpatterns = [
	path('token-auth/', obtain_jwt_token),
	path('current_user/', current_user),
	path('password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
	path('google/', GoogleView.as_view(), name='google'),  # add path for google authentication
	path('facebook/', FacebokView.as_view(), name='facebook'),  # add path for google authentication
	path('', include(router.urls)),
]
from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token

router = DefaultRouter()
router.register(r'', UserView, base_name='users')

urlpatterns = [
	path('token-auth/', obtain_jwt_token),
	path('current_user/', current_user),
	path('', include(router.urls)),
]
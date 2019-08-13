from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', UserView, base_name='users')
urlpatterns = router.urls
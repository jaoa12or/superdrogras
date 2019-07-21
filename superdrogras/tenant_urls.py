from django.urls import path, include
from apps.franchise.views import home

urlpatterns = [
    path('', home, name='home'),
]
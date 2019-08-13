from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import *
from rest_framework import routers 

app_name = 'franchise'

urlpatterns = [
    path('create/', create_franchise, name='create_franchise'),
    path('update/<int:id_franchise>/', update_franchise, name='update_franchise'),
    path('api/', franchise_list,name='franchise_list'),
    path('api/<int:pk>/', franchise_detail, name='franchise_detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
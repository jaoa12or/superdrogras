from django.urls import path
from .views import *

app_name = 'franchise'
urlpatterns = [
    path('create/', create_franchise, name='create_franchise'),
    path('update/<int:id_franchise>/', update_franchise, name='update_franchise'),
]

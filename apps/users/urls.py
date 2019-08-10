from django.urls import path
from .views import *

app_name = 'users'
urlpatterns = [
	path('', users, name='users'),
	path('create/', UserCreateView.as_view(), name='create'),
	path('create1/', create, name='create1'),
	path('edit/<int:pk>', UserUpdateView.as_view(), name='edit'),
	path('delete/<int:pk>', delete, name='delete')
]
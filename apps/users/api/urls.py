from django.urls import path, include
from .views import *

urlpatterns = [
    path('', UserListView.as_view()),
    path('create/', UserCreateView.as_view()),
    path('<pk>', UserDetailView.as_view()),
]
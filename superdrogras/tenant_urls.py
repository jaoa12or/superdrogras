from django.urls import path, include
from apps.franchise.views import home

urlpatterns = [
    path('', home, name='home'),
    path('users/', include('apps.users.urls', namespace='users')),
]
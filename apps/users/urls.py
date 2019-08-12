from django.urls import path, include
from .views import *
from django.contrib.auth.views import LoginView, LogoutView, PasswordResetView, PasswordResetDoneView, PasswordResetConfirmView, PasswordChangeView, PasswordResetCompleteView
from django.urls import reverse_lazy
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token

router = routers.DefaultRouter() 

router.register(r'users', UserView, 'user')

app_name = 'users'
urlpatterns = [
	path('', UserListView.as_view(), name='users'),
	path('create/', create, name='create'),
	path('edit/<int:pk>', edit, name='edit'),
	path('delete/<int:pk>', UserDeleteView.as_view(), name='delete'),
	path('login/', LoginView.as_view(template_name='login_form.html'), name='login'),
	path("logout/", LogoutView.as_view(template_name='users.html'), name='logout'),
	path('api/', include(router.urls)),
	path('token-auth/', obtain_jwt_token)
]
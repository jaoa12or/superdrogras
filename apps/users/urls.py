from django.urls import path
from .views import *
from django.contrib.auth.views import LoginView, LogoutView, PasswordResetView, PasswordResetDoneView, PasswordResetConfirmView, PasswordChangeView, PasswordResetCompleteView
from django.urls import reverse_lazy

app_name = 'users'
urlpatterns = [
	path('', UserListView.as_view(), name='users'),
	# path('create/', UserCreateView.as_view(), name='create'),
	path('create/', create, name='create'),
	#path('edit/<int:pk>', UserUpdateView.as_view(), name='edit'),
	path('edit/<int:pk>', edit, name='edit'),
	path('delete/<int:pk>', UserDeleteView.as_view(), name='delete'),
	path('login/', LoginView.as_view(template_name='login_form.html'), name='login'),
	#path('logout/', UserLogoutView.as_view(), name="logout"),
	path("logout/", LogoutView.as_view(template_name='users.html'), name='logout'),
]
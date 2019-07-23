from django import forms
from django.contrib.auth.models import AbstractBaseUser, Group as Rol
from django.contrib.auth.forms import UserCreationForm
from .models import TenantUser

class UserForm(UserCreationForm):
    class Meta:
        model = TenantUser
        fields = (
        	'email',
        	'first_name_1',
			'first_name_2',
			'last_name_1',
			'last_name_2',
			'phone',
			'phone2',
			'address',
        )
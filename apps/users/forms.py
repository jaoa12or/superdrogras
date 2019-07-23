from django import forms
from django.contrib.auth.models import AbstractBaseUser, Group as Rol
from django.contrib.auth.forms import UserCreationForm
from .models import TenantUser

class UserForm(UserCreationForm):
	def __init__(self, *args, **kwargs):
		super(UserForm, self).__init__(*args, **kwargs)
		instance = getattr(self, 'instance', None)
        # Se está actualizando el usuario, por lo tanto no es necesario el campo password de confirmación.
        # También se puede cambiar el campo password1 a texto normal, para ver qué pass se va poner
		if instance and instance.pk:
			self.fields['password1'] = forms.CharField(label='Password', widget=forms.PasswordInput, required=False)
			del self.fields['password2']
			self.fields['email'].widget.attrs['readonly'] = True

	class Meta:
		model = TenantUser
		fields = (
			'id',
        	'email',
        	'first_name_1',
			'first_name_2',
			'last_name_1',
			'last_name_2',
			'phone',
			'phone2',
			'address',
        )
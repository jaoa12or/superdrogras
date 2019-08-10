from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.core.validators import MinLengthValidator
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
	identification = models.CharField(max_length=10, unique=True, validators=[MinLengthValidator(4, 'Mínimo 8 dígitos')])
	address = models.CharField(max_length=128, null=True, blank=True)
	birthday = models.DateField(null=True, blank=True)
	phone = models.CharField(max_length=11, null=True, blank=True)
	phone2 = models.CharField(max_length=11, null=True, blank=True)
	def __str__(self):
		return self.get_full_name		


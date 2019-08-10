from django.core.exceptions import ValidationError
import time
from django.db import models
from django.core.validators import MinLengthValidator
from django.db import connection
from django.contrib.auth.models import AbstractBaseUser, AbstractUser, BaseUserManager, Permission, Group
from django.contrib.auth import get_user_model
from django.contrib.contenttypes.models import ContentType
from django.conf import settings
from django.dispatch import Signal
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _
from django_tenants.models import DomainMixin
from .compat import TenantMixin
from .compat import get_public_schema_name, get_tenant_model
from django_tenants.postgresql_backend.base import _is_valid_schema_name
from django.http import HttpResponse
from django.utils.html import escape

class Franchise(TenantMixin):
    """
    Modelo que representará a los tenants en el sistema
    """
    name = models.CharField(max_length=100, verbose_name='nombre de la franquicia *')
    description = models.CharField(max_length=100, verbose_name='descripción de la franquicia *')
    address = models.CharField(max_length=100, verbose_name='dirección de la franquicia *')
    phone = models.CharField(max_length=100, verbose_name='teléfono de la franquicia *')
    def __str__(self):
        return self.name

    def delete(self, force_drop=False, *args, **kwargs):
        if force_drop:
            super().delete(force_drop, *args, **kwargs)
        else:
            raise DeleteError("Not supported -- delete_tenant() should be used.")


class Domain(DomainMixin):
    """
    Modelo que representará al dominio en el sistema
    """
    pass

class BaseModel(models.Model):
    is_active = models.BooleanField(default=True,null=True,blank=True,verbose_name='Activo')
        



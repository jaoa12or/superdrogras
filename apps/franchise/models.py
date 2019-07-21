from django.core.exceptions import ValidationError
from django.db import models
from django_tenants.models import TenantMixin, DomainMixin
from django_tenants.postgresql_backend.base import _is_valid_schema_name

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


class Domain(DomainMixin):
    """
    Modelo que representará al dominio en el sistema
    """
    pass



from django.db import models
from django.utils.translation import ugettext_lazy as _
from apps.franchise.models import UserProfile
from django.contrib.auth.models import PermissionsMixin

class TenantUser(UserProfile):
    first_name_1 = models.CharField(_("Primer Nombre"),max_length = 100,blank = False, null=False)
    first_name_2 = models.CharField(_("Segundo Nombre"),max_length = 100,blank = True, null=True)
    last_name_1 = models.CharField(_("Primer Apellido"),max_length = 100,blank = False, null=False)
    last_name_2 = models.CharField(_("Segundo Apellido"),max_length = 100,blank = True, null=True)
    phone = models.CharField(_("Teléfono"),max_length = 50,blank = True, null=True)
    phone2 = models.CharField(_("Celular"),max_length = 50,blank = True, null=True)
    address = models.CharField(_("Dirección"),max_length = 100,blank = True, null=True)
		


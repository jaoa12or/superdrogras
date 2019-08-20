from django.db import transaction
from django_tenants.test.cases import TenantTestCase
from django_tenants.test.client import TenantClient
from django.urls import reverse
from .models import User
from django.test import TestCase

class BaseSetup(TenantTestCase):
    def setUp(self):
        super().setUp()
        self.c = TenantClient(self.tenant)

    # test para proba que existe una vista de listar usuarios
    def test_user_list_view(self):
        response = self.c.get(reverse('users:users'))
        self.assertEqual(response.status_code, 200)

    #comentario 2
    def test_user_create_view(self):
        response = self.c.get(reverse('users:create'))
        self.assertEqual(response.status_code, 200)
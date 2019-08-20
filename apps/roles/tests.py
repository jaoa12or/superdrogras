from django_tenants.test.cases import TenantTestCase
from django_tenants.test.client import TenantClient
from django.urls import reverse

class BaseSetup(TenantTestCase):
    def setUp(self):
        super().setUp()
        self.c = TenantClient(self.tenant)

    def test_role_list_view(self):
        response = self.c.get(reverse('roles:roles'))
        self.assertEqual(response.status_code, 200)

    def test_role_create_view(self):
        response = self.c.get(reverse('roles:create'))
        self.assertEqual(response.status_code, 200)

class BaseSetup(TenantTestCase):
    @staticmethod
    def get_test_tenant_domain():
        return 'tenant.my_domain.com'


    @staticmethod
    def get_test_schema_name():
        return 'tester'



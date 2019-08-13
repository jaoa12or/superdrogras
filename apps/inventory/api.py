from rest_framework import routers
from apps.inventory.views import InventoryViewSet

router = routers.DefaultRouter()
router.register(r'inventory', InventoryViewSet)
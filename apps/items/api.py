from rest_framework import routers
from apps.items.views import ProductViewSet

router = routers.DefaultRouter()
router.register(r'item', ProductViewSet)
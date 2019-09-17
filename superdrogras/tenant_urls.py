from django.urls import path, include
from apps.franchise.views import home
from django.conf import settings
from django.conf.urls.static import static
from apps.inventory.api import router as router_inventory
from apps.items.api import router as router_item

urlpatterns = [
    path('', home, name='home'),
    path('franchise/', include('apps.franchise.urls', namespace='franchise')),
    path('users/', include('apps.users.urls', namespace='users')),
    path('roles/', include('apps.roles.urls', namespace='roles')),
    path('items/', include('apps.items.urls', namespace='items')),
    path('inventory/', include('apps.inventory.urls', namespace='inventory')),
    path('cart/', include('apps.cart.urls', namespace='cart')),
    path('orders/', include('apps.orders.urls', namespace='orders')),
    path('shop/', include('apps.shop.urls', namespace='shop')),
    path('api/', include(router_inventory.urls)),
    path('api/', include(router_item.urls))
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
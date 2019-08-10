from django.urls import path, include
from apps.franchise.views import home
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', home, name='home'),
    path('users/', include('apps.users.urls', namespace='users')),
    path('items/', include('apps.items.urls', namespace='items')),
    path('inventory/', include('apps.inventory.urls', namespace='inventory')),
    path('cart/', include('apps.cart.urls', namespace='cart')),
    path('orders/', include('apps.orders.urls', namespace='orders')),
    path('shop/', include('apps.shop.urls', namespace='shop')),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
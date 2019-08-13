from django.urls import path
from . import views

app_name = 'cart'

urlpatterns = [
    path('', views.cart_detail, name='cart_detail'),
    path('add/<int:product_id>/',
         views.cart_add,
         name='cart_add'),
    path('remove/<int:product_id>/',
         views.cart_remove,
         name='cart_remove'),
    path('api/cart-list', views.CartAPI.as_view(), name='api_cart_list'),
    path('api/add-product-to-cart', views.CartAPI.as_view(), name='api_cart_add_product'),
    path('api/remove-product-of-cart', views.CartAPI.as_view(), name='api_cart_remove_product'),
]
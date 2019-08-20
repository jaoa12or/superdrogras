from django.urls import path
from . import views

app_name = 'shop'

urlpatterns = [
    path('', views.product_list, name='product_list'),
    path('<slug:category_slug>/', views.product_list, 
         name='product_list_by_category'),
    path('<int:id>/<slug:slug>/', views.product_detail,
         name='product_detail'),
    path('api/product-list', views.ProductListView.as_view(), name='api_product_list'),
    path('api/get-product/<int:pk>/<slug:slug>/', views.ProductDetailView.as_view(), name='api_get_product')
]
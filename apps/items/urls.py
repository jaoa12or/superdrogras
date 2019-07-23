from django.urls import path
from apps.items.views import ProductListView,ProductDetailView,ProductCreateView,ProductUpdateView,ProductDeleteView

app_name = 'items'

urlpatterns = [
	path('', ProductListView.as_view(), name='list'),
	path('<int:pk>', ProductDetailView.as_view(), name='detail'),
	path('create/', ProductCreateView.as_view(), name='create'),
	path('edit/<int:pk>', ProductUpdateView.as_view(), name='edit'),
	path('delete/<int:pk>', ProductDeleteView.as_view(), name='delete')
]
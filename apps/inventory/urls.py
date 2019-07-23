from django.urls import path
from apps.inventory.views import InventoryListView,InventoryDetailView,InventoryCreateView,InventoryUpdateView,InventoryDeleteView

app_name = 'inventory'

urlpatterns = [
	path('', InventoryListView.as_view(), name='list'),
	path('<int:pk>', InventoryDetailView.as_view(), name='detail'),
	path('create/', InventoryCreateView.as_view(), name='create'),
	path('edit/<int:pk>', InventoryUpdateView.as_view(), name='edit'),
	path('delete/<int:pk>', InventoryDeleteView.as_view(), name='delete')
]
from django.urls import path
from apps.items.views import ItemsListView,ItemsDetailView,ItemsCreateView,ItemsUpdateView,ItemsDeleteView

app_name = 'items'

urlpatterns = [
	path('', ItemsListView.as_view(), name='list'),
	path('<int:pk>', ItemsDetailView.as_view(), name='detail'),
	path('create/', ItemsCreateView.as_view(), name='create'),
	path('edit/<int:pk>', ItemsUpdateView.as_view(), name='edit'),
	path('delete/<int:pk>', ItemsDeleteView.as_view(), name='delete')
]
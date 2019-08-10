from django.urls import path
from .views import *
from django.urls import reverse_lazy

app_name = 'roles'
urlpatterns = [
	path('', RoleListView.as_view(), name='roles'),
	path('create/', RoleCreateView.as_view(), name='create'),
	path('<int:pk>', RoleDetailView.as_view(), name='detail'),
	path('edit/<int:pk>', RoleUpdateView.as_view(), name='edit'),
	path('delete/<int:pk>', RoleDeleteView.as_view(), name='delete'),
]
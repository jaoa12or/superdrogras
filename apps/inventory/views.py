from django.shortcuts import render
from django.views.generic import ListView,CreateView,UpdateView,DeleteView,DetailView
from apps.inventory.models import Inventory
from apps.inventory.forms import InventoryForm
from django.urls import reverse_lazy
from apps.inventory.serializers import InventorySerializer
from rest_framework import viewsets

class InventoryListView(ListView):
    model = Inventory

class InventoryDetailView(DetailView):
    model = Inventory

class InventoryCreateView(CreateView):
    model = Inventory
    form_class = InventoryForm
    success_url = reverse_lazy('inventory:list')

class InventoryUpdateView(UpdateView):
    model = Inventory
    form_class = InventoryForm
    success_url = reverse_lazy('inventory:list')

class InventoryDeleteView(DeleteView):
    model = Inventory
    success_url = reverse_lazy('inventory:list')

class InventoryViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = InventorySerializer
    queryset = Inventory.objects.all()

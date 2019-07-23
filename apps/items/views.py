from django.shortcuts import render
from django.views.generic import ListView,CreateView,UpdateView,DeleteView,DetailView
from apps.items.models import Items
from apps.items.forms import ItemsForm
from django.urls import reverse_lazy

class ItemsListView(ListView):
    model = Items

class ItemsDetailView(DetailView):
    model = Items

class ItemsCreateView(CreateView):
    model = Items
    form_class = ItemsForm
    success_url = reverse_lazy('items:list')

class ItemsUpdateView(UpdateView):
    model = Items
    form_class = ItemsForm
    success_url = reverse_lazy('items:list')

class ItemsDeleteView(DeleteView):
    model = Items
    success_url = reverse_lazy('items:list')

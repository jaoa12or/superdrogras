from django.shortcuts import render
from django.views.generic import ListView,CreateView,UpdateView,DeleteView,DetailView
from apps.items.models import Product
from apps.items.forms import ProductForm
from django.urls import reverse_lazy
from apps.items.serializers import ProductSerializer
from rest_framework import viewsets

class ProductListView(ListView):
    model = Product

class ProductDetailView(DetailView):
    model = Product

class ProductCreateView(CreateView):
    model = Product
    form_class = ProductForm
    success_url = reverse_lazy('items:list')

class ProductUpdateView(UpdateView):
    model = Product
    form_class = ProductForm
    success_url = reverse_lazy('items:list')

class ProductDeleteView(DeleteView):
    model = Product
    success_url = reverse_lazy('items:list')

class ProductViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
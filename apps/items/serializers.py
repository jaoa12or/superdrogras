# todo/serializers.py

from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = (
      'id',
      'category',
      'id_product',
      'laboratory', 
      'presentation', 
      'medical_name', 
      'measure_unity',
      'description',
      'reference',
      'supplier',
      'slug',
      'image',
      'price'
    )
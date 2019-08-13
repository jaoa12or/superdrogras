from rest_framework import serializers
from apps.items.models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('pk', 'category', 'id_product', 'laboratory', 'presentation', 'medical_name', 'quantity', 'measure_unity',
                  'description', 'reference', 'supplier', 'slug', 'image', 'price', 'available', 'created', 'updated')

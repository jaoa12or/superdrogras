from rest_framework import serializers
from apps.cart.cart import Cart


class CartSerializer(serializers.Serializer):
    class Meta:
        model = Cart
        fields = ('pk', 'category', 'id_product', 'laboratory', 'presentation', 'medical_name', 'quantity', 'measure_unity',
                  'description', 'reference', 'supplier', 'slug', 'image', 'price', 'available', 'created', 'updated')

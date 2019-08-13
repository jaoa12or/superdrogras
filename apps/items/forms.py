from apps.items.models import Product
from django import forms

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['id_product','image','laboratory','presentation',
                  'medical_name', 'slug', 'quantity','measure_unity',
                  'description','reference','supplier',
                  'price']
from apps.items.models import Items
from django import forms

class ItemsForm(forms.ModelForm):
    class Meta:
        model = Items
        fields = ['id_item','laboratory','presentation','medical_name','quantity','measure_unity','description','reference','supplier']
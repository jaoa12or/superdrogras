from apps.inventory.models import Inventory
from django import forms

class InventoryForm(forms.ModelForm):
    class Meta:
        model = Inventory
        fields = ['item','existing_quantity','committed_quantity','last_entry_date','last_output_date']
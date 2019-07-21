from django import forms
from .models import *


class FranchiseForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        from django.conf import settings
        super(FranchiseForm, self).__init__(*args, **kwargs)
        self.fields['schema_name'].label = "Subdominio *"
        self.fields['schema_name'].help_text = "Esta será su direccion: midireccion%s" % settings.DOMAIN

    class Meta:
        model = Franchise
        fields = ('name', 'schema_name','description','address','phone',)

    def clean_schema_name(self):
        tenant_address = self.cleaned_data["schema_name"]
        if tenant_address.lower() == 'www':
            self.add_error("schema_name", "No es posible registrar %s como dirección en el sistema" % tenant_address)

        return tenant_address


class UpdateFranchiseForm(forms.ModelForm):
    class Meta:
        model = Franchise
        fields = ('name','description','address','phone', )
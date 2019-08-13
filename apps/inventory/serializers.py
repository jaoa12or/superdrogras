# todo/serializers.py

from rest_framework import serializers
from .models import Inventory

class InventorySerializer(serializers.ModelSerializer):
  class Meta:
    model = Inventory
    fields = ('id','item','existing_quantity', 'committed_quantity', 'last_entry_date', 'last_output_date')
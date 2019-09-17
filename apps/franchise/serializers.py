# todo/serializers.py

from rest_framework import serializers
from .models import Franchise
# serializer utilizado para las franquicias
class FranchiseSerializer(serializers.ModelSerializer):
  class Meta:
    model = Franchise
    fields = ('id','schema_name', 'name', 'description', 'address','phone')
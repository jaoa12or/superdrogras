from rest_framework import viewsets 
from rest_framework import generics 
from .serializers import GroupSerializer, PermissionSerializer
from django.contrib.auth.models import Group, Permission

class RoleView(viewsets.ModelViewSet):
    serializer_class = GroupSerializer
    queryset = Group.objects.all().order_by('id')

class PermissionListView(generics.ListAPIView):
    serializer_class = PermissionSerializer
    queryset = Permission.objects.all().order_by('id')
    
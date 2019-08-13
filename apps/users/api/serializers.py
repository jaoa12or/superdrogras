from rest_framework import serializers
from apps.users.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
        	'first_name', 
        	'last_name', 
        	'identification', 
        	'username', 
            'birthday', 
            'groups',
            'phone',
            'phone2', 
            'email', 
            'address', 
            'is_active',
            'password',
        )

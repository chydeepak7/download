from rest_framework import serializers
from django.contrib.auth.models import User

from .models import *


class FileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Files
        fields = '__all__'
    
    



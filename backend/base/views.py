from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
# Create your views here.


# api_view(["GET"])
# def test(request):
#     return Response("hello" )


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def validate(self,attrs):
        data = super().validate(attrs)
        data['username'] = self.user.username
        data['email'] = self.user.email
        return data

    

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



@api_view(["GET"])
def getUserProfile(request):
    user = request.user
    files = Files.objects.all()
    serializer = FileSerializer(files, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def get_files(request):
    files = Files.objects.all()
    serializer = FileSerializer(files, many=True)
    return Response(serializer.data)

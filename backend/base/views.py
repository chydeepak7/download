from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import FileSerializer
from django.http import JsonResponse
# Create your views here.


# api_view(["GET"])
# def test(request):
#     return Response("hello" )

@api_view(["GET"])
def get_files(request):
    files = Files.objects.all()
    # files = ['asdf','asdf']
    serializer = FileSerializer(files, many=True)
    return Response(files)


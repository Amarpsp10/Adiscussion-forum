from django.shortcuts import render
from .models import Profile
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ProfileSerializers
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializers

# APIView


class CreateProfile(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    parser_classes = [MultiPartParser, FormParser]

    def create(self, request, format=None):
        print(request.data)
        serializer = ProfileSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdateProfile(generics.UpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializers
    parser_classes = [MultiPartParser, FormParser]


class GetProfile(generics.ListAPIView):
    serializer_class = ProfileSerializers

    def get_queryset(self):
        username = self.kwargs['pk']
        print(username)
        return Profile.objects.filter(username=username)

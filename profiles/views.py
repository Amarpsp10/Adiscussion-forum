from django.shortcuts import render
from .models import Profile
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ProfileSerializers
# Create your views here.


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializers

from django.shortcuts import render
from .models import Coins
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import CoinsSerializer
# Create your views here.


class CoinViewSet(viewsets.ModelViewSet):
    queryset = Coins.objects.all()
    serializer_class = CoinsSerializer

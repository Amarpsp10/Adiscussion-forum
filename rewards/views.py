from django.shortcuts import render
from .models import Coins
from rest_framework import viewsets
from rest_framework import permissions, generics
from .serializers import CoinsSerializer
# Create your views here.


class CoinViewSet(viewsets.ModelViewSet):
    queryset = Coins.objects.all()
    serializer_class = CoinsSerializer


class UpdateCoin(generics.UpdateAPIView):
    queryset = Coins.objects.all()
    serializer_class = CoinsSerializer


class GetCoins(generics.ListAPIView):
    serializer_class = CoinsSerializer

    def get_queryset(self):
        username = self.kwargs['pk']
        return Coins.objects.filter(username=username)

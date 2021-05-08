from rest_framework import serializers
from .models import Coins


class CoinsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Coins
        fields = ['username', 'coins']

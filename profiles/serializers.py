from rest_framework import serializers
from .models import Profile


class ProfileSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'username', 'name',
                  'company', 'about', 'location', 'coins']
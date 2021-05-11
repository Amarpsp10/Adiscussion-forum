from rest_framework import serializers
from .models import Profile


class ProfileSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'username', 'profile_img', 'name',
                  'company', 'about', 'location']

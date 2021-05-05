from django.shortcuts import render
from .models import Topic
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import TopicSerializer
# Create your views here.


class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer

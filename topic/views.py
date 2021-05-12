from django.shortcuts import render
from .models import Topic, SavedTopic
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework import generics
from .serializers import TopicSerializer, SavedTopicSerializer
# Create your views here.


class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer


class GetUserTopic(generics.ListAPIView):
    serializer_class = TopicSerializer

    def get_queryset(self):
        username = self.kwargs['username']
        return Topic.objects.filter(username=username)


class SavedTopicViewSet(viewsets.ModelViewSet):
    queryset = SavedTopic.objects.all()
    serializer_class = SavedTopicSerializer


class SavedTopics(generics.ListAPIView):
    serializer_class = SavedTopicSerializer

    def get_queryset(self):
        username = self.kwargs['username']
        return SavedTopic.objects.filter(username=username)


class UpdateSavedTopic(generics.UpdateAPIView):
    queryset = SavedTopic.objects.all()
    serializer_class = SavedTopicSerializer

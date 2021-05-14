from django.shortcuts import render
from .models import Topic, SavedTopics
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework import generics
from .serializers import TopicSerializer, SavedTopicsSerializer
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
    queryset = SavedTopics.objects.all()
    serializer_class = SavedTopicsSerializer


class GetUserSavedTopics(generics.ListAPIView):
    serializer_class = SavedTopicsSerializer

    def get_queryset(self):
        saver = self.kwargs['saver']
        return SavedTopics.objects.filter(saver=saver)


class DeleteSavedTopics(generics.RetrieveDestroyAPIView):
    queryset = SavedTopics.objects.all()
    serializer_class = SavedTopicsSerializer

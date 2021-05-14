from django.shortcuts import render
from .models import Topic, SavedTopics, Comments
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework import generics
from .serializers import TopicSerializer, SavedTopicsSerializer, CommentSerializer
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


class IsSaved(generics.ListAPIView):
    serializer_class = SavedTopicsSerializer

    def get_queryset(self):
        saver = self.kwargs['saver']
        topic_id = self.kwargs['topic_id']
        return SavedTopics.objects.filter(saver=saver, topic_id=topic_id)


class AddComment(viewsets.ModelViewSet):
    queryset = Comments.objects.all()
    serializer_class = CommentSerializer


class GetComments(generics.ListAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        topic_id = self.kwargs['topic_id']
        return Comments.objects.filter(topic_id=topic_id)

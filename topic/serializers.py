from rest_framework import serializers
from .models import Topic, SavedTopics, Comments


class TopicSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Topic
        fields = ['id', 'username', 'title', 'tag', 'description', 'replies']


class SavedTopicsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SavedTopics
        fields = ['id', 'saver', 'username', 'title', 'tag', 'topic_id']


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comments
        fields = ['topic_id', 'username', 'comment']

from rest_framework import serializers
from .models import Topic, SavedTopics


class TopicSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Topic
        fields = ['id', 'username', 'title', 'tag', 'description', 'replies']


class SavedTopicsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SavedTopics
        fields = ['id', 'saver', 'username', 'title', 'tag', 'topic_id']

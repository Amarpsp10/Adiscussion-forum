from rest_framework import serializers
from .models import Topic, SavedTopic


class TopicSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Topic
        fields = ['id', 'username', 'title', 'tag', 'description', 'replies']


class SavedTopicSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SavedTopic
        fields = ['id', 'username', 'saved_topic']

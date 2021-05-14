from django.contrib import admin
from .models import Topic, SavedTopics
# Register your models here.


@admin.register(Topic)
class TopicAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'username', 'tag', 'description']
    list_filter = ['title']


@admin.register(SavedTopics)
class SavedTopicAdmin(admin.ModelAdmin):
    list_display = ['id', 'saver', 'username', 'title', 'tag', 'topic_id']
    list_filter = ['username']

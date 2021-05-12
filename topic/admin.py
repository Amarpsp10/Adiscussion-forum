from django.contrib import admin
from .models import Topic, SavedTopic
# Register your models here.


@admin.register(Topic)
class TopicAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'username', 'tag', 'description']
    list_filter = ['title']


@admin.register(SavedTopic)
class SavedTopicAdmin(admin.ModelAdmin):
    list_display = ['id', 'username', 'saved_topic']
    list_filter = ['username']

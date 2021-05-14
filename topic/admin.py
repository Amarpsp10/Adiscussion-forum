from django.contrib import admin
from .models import Topic, SavedTopics, Comments
# Register your models here.


@admin.register(Topic)
class TopicAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'username', 'tag', 'description']
    list_filter = ['title']


@admin.register(SavedTopics)
class SavedTopicAdmin(admin.ModelAdmin):
    list_display = ['id', 'saver', 'username', 'title', 'tag', 'topic_id']
    list_filter = ['username']


@admin.register(Comments)
class CommentAdmin(admin.ModelAdmin):
    list_display = ['id', 'topic_id', 'username', 'comment']
    list_filter = ['topic_id']

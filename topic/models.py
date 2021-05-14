from django.db import models
# Create your models here.


class Topic(models.Model):
    username = models.CharField(max_length=50)
    title = models.CharField(max_length=100, unique=True)
    tag = models.CharField(max_length=50)
    description = models.CharField(max_length=1000)
    replies = models.CharField(max_length=10000)

    def __str__(self):
        return self.title


class SavedTopics(models.Model):
    saver = models.CharField(max_length=50)
    username = models.CharField(max_length=50)
    title = models.CharField(max_length=100, unique=True)
    tag = models.CharField(max_length=50)
    topic_id = models.IntegerField()

    def __str__(self):
        return self.saver

from django.db import models

# Create your models here.


class Coins(models.Model):
    username = models.CharField(max_length=50)
    coins = models.IntegerField()

    def __str__(self):
        return self.username

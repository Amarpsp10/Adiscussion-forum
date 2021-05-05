from django.db import models

# Create your models here.


class Profile(models.Model):
    username = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    company = models.CharField(max_length=50)
    about = models.CharField(max_length=100)

    def __str__(self):
        return self.username

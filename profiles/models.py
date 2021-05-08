from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.


def upload_to(instance, filename):
    return 'profile_images/{filename}'.format(filename=filename)


class Profile(models.Model):
    username = models.CharField(max_length=50, unique=True)
    profile_img = models.ImageField(_("Image"), upload_to=upload_to, height_field=None,
                                    width_field=None, max_length=None, default='profile_images/default.jpg')
    name = models.CharField(max_length=50)
    company = models.CharField(max_length=50)
    about = models.CharField(max_length=100)
    location = models.CharField(max_length=50)

    def __str__(self):
        return self.username

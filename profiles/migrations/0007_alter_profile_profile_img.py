# Generated by Django 3.2 on 2021-05-08 15:19

from django.db import migrations, models
import profiles.models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0006_alter_profile_profile_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='profile_img',
            field=models.ImageField(default='profile_images/default.jpg', upload_to=profiles.models.upload_to, verbose_name='Image'),
        ),
    ]
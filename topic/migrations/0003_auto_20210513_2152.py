# Generated by Django 3.2 on 2021-05-14 04:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('topic', '0002_savedtopic'),
    ]

    operations = [
        migrations.CreateModel(
            name='SavedTopics',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('saver', models.CharField(max_length=50)),
                ('username', models.CharField(max_length=50)),
                ('title', models.CharField(max_length=100, unique=True)),
                ('tag', models.CharField(max_length=50)),
                ('topic_id', models.IntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='SavedTopic',
        ),
    ]

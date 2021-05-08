from django.contrib import admin
from .models import Profile
# Register your models here.


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['id', 'username',
                    'name', 'company', 'about', 'profile_img']
    list_filter = ['username']

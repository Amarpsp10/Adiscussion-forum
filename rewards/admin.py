from django.contrib import admin
from .models import Coins
# Register your models here.


@admin.register(Coins)
class CoinAdmin(admin.ModelAdmin):
    list_display = ['username', 'coins']

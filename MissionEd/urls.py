"""MissionEd URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt
from topic import views
from profiles.views import ProfileViewSet, CreateProfile
from rewards.views import CoinViewSet, UpdateCoin
from rest_framework import routers

from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'topics', views.TopicViewSet)
router.register(r'profiles', ProfileViewSet)
router.register(r'coins', CoinViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rest-auth/', include('rest_auth.urls')),
    path(r'rest-auth/registration/',
         csrf_exempt(include('rest_auth.registration.urls'))),
    path('', include(router.urls)),
    path('profiles/create/', CreateProfile.as_view(), name='createprofile'),
    path('coins/update/<int:pk>/', UpdateCoin.as_view(), name='updatecoin')
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

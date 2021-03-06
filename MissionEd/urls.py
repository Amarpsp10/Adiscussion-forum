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
from topic.views import TopicViewSet, GetUserTopic, SavedTopicViewSet, GetUserSavedTopics, DeleteSavedTopics, IsSaved, AddComment, GetComments
from profiles.views import ProfileViewSet, CreateProfile, UpdateProfile, GetProfile
from rewards.views import CoinViewSet, UpdateCoin, GetCoins
from rest_framework import routers

from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'topics', TopicViewSet)
router.register(r'profiles', ProfileViewSet)
router.register(r'coins', CoinViewSet)
router.register(r'profile/create', CreateProfile)
router.register(r'savetopic', SavedTopicViewSet)
router.register(r'comments/add', AddComment)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rest-auth/', include('rest_auth.urls')),
    path(r'rest-auth/registration/',
         include('rest_auth.registration.urls')),
    path('', include(router.urls)),

    path('coins/update/<int:pk>/', UpdateCoin.as_view(), name='updatecoin'),
    path('profile/update/<int:pk>/', UpdateProfile.as_view(), name='updateprofile'),
    path('profile/get/<str:pk>/', GetProfile.as_view(), name='getprofile'),
    path('coins/get/<str:pk>/', GetCoins.as_view(), name='getcoins'),
    path('topics/user/<str:username>/',
         GetUserTopic.as_view(), name='getusertopic'),
    path('topics/saved/<str:saver>/',
         GetUserSavedTopics.as_view(), name='usersavedtopic'),
    path('topics/delete/<int:pk>/',
         DeleteSavedTopics.as_view(), name='deletesavedtopics'),
    path('topics/issaved/<str:saver>/<int:topic_id>/',
         IsSaved.as_view(), name='istopicsaved'),
    path('comments/get/<int:topic_id>/',
         GetComments.as_view(), name='getcommentoftopic')
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

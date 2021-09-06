from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    DislikeViewSet,
    InboxViewSet,
    LikeViewSet,
    MatchViewSet,
    ProfileViewSet,
    SettingViewSet,
    UserPhotoViewSet,
)

router = DefaultRouter()
router.register("profile", ProfileViewSet)
router.register("like", LikeViewSet)
router.register("setting", SettingViewSet)
router.register("dislike", DislikeViewSet)
router.register("match", MatchViewSet)
router.register("inbox", InboxViewSet)
router.register("userphoto", UserPhotoViewSet)

urlpatterns = [
    path("", include(router.urls)),
]

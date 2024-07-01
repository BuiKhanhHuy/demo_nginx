from fastapi import APIRouter
from controllers.admin import AdminPhotoController

router = APIRouter()
admin_photo_controller = AdminPhotoController()
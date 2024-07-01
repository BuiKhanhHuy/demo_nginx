from fastapi import APIRouter
from controllers.admin import AdminAlbumController

router = APIRouter()
admin_album_controller = AdminAlbumController()
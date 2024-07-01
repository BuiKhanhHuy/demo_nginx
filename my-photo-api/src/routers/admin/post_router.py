from fastapi import APIRouter
from controllers.admin import AdminPostController

router = APIRouter()
admin_post_controller = AdminPostController()
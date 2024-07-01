from fastapi import APIRouter
from controllers.admin import AdminCommentController

router = APIRouter()
admin_comment_controller = AdminCommentController()
from fastapi import APIRouter
from controllers.admin import AdminUserController

router = APIRouter()
admin_user_controller = AdminUserController()


@router.get("/")
def get_users():
    return admin_user_controller.get_users()


@router.get("/{id}")
def get_user_detail(id: int):
    return admin_user_controller.get_user_detail(id)

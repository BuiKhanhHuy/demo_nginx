from fastapi import APIRouter
from controllers.admin import AdminTodoController

router = APIRouter()
admin_todo_controller = AdminTodoController()
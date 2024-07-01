from services.user_service import UserService


class AdminUserController:
    def __init__(self):
        self.user_service = UserService()

    def get_users(self):
        return self.user_service.get_all()
    
    def get_user_detail(self, id):
        return self.user_service.get_by_id(id)

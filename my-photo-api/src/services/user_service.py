import requests


class UserService:
    def __init__(self):
        self.url = 'https://jsonplaceholder.typicode.com/users'

    def get_all(self):
        return requests.get(self.url).json()

    def get_by_id(self, id):
        return requests.get(f"{self.url}/{id}").json()

    def update(self, id, data):
        pass

    def delete(self, id):
        pass

from fastapi import APIRouter, Depends
from ..models.user import User
from ..services.user import UserService

api = APIRouter(prefix="/api/users")

@api.get("")
def api_get_users(userService: UserService = Depends()) -> list[User]:
    return userService.get_users()

@api.get("/{email}")
def api_get_user(email: str, userService: UserService = Depends()) -> User:
    return userService.get_user(email)

@api.post("")
def api_create_user(user: User, userService: UserService = Depends()) -> User:
    return userService.create_user(user)

@api.put("")
def api_update_user(user: User, userService: UserService = Depends()) -> User:
    return userService.update_user(user)

@api.delete("/{email}")
def api_delete_user(email: str, userService: UserService = Depends()) -> User:
    temp = userService.get_user(email)
    userService.delete_user(email)
    return temp
from fastapi import APIRouter, FastAPI, Depends
from pydantic import BaseModel
from .models.user import User
from .services.user import UserService
from .api import user
from enum import Enum

app = FastAPI()
app.include_router(user.api)


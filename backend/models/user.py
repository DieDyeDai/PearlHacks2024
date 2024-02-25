from pydantic import BaseModel
from enum import Enum

class Gender(Enum):
    MALE = 0
    FEMALE = 1
    NONBINARY = 2
    OTHER = 3

class User(BaseModel):
    name: str
    bio: str
    interests: list[str]
    gender: Gender
    email: str
    password: str


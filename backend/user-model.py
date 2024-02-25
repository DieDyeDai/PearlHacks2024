from pydantic import BaseModel
from enum import Enum

class Gender(Enum):
    MALE = 'Male'
    FEMALE = 'Female'
    NONBINARY = 'Nonbinary'
    OTHER = 'Other'

class User(BaseModel):
    name: str
    bio: str
    interests: list[str]
    gender: Gender
    email: str
    password: str


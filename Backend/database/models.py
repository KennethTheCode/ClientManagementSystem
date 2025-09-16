from pydantic import BaseModel
from datetime import datetime

class Users(BaseModel):
    email: str
    password: str
    birthday: datetime
    address: str

class UserLogin(BaseModel):
    email: str
    password: str
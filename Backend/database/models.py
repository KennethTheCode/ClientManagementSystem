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

class Activity(BaseModel):
    user_id: str
    projectName: str
    clientName: str
    contact: str
    revenue: float
    deadline: datetime
    projectDescription: str
    timestamp: datetime = datetime.now()

class Client(BaseModel):
    user_id: str
    clientName: str
    contact: str
    address: str

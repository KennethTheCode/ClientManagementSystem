from fastapi import FastAPI, APIRouter, HTTPException
from configrations import collection
from database.schema import user_data
from database.schema import all_users
from database.models import Users, UserLogin
from bson.objectid import ObjectId
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
router = APIRouter()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def view_rooms():
    data = collection.find()
    return all_users(data)

@router.post("/")
async def create_user(new_user: Users):
    try:
        resp = collection.insert_one(dict(new_user))
        return {"status": 200, "id": str(resp.inserted_id)}
    except Exception as e:
        return HTTPException(status_code=500, detail=f"Some error {e}")

@router.post("/login")
async def authentication(request: UserLogin):
    user = collection.find_one({"email": request.email, "password": request.password})
    if not user:
        raise HTTPException(status_code=404, detail="User not found.")
    return {"status": 200, "data": user_data(user)}
    


app.include_router(router)
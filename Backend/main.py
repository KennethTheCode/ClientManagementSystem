from fastapi import FastAPI, APIRouter, HTTPException
from configrations import collection
from configrations import activities_collection
from configrations import clients_collection
from database.models import Activity
from database.models import Client
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
# Users Backend
@app.get("/") # Get all users
async def view_users():
    data = collection.find()
    return all_users(data)

@router.post("/") # Create a new user
async def create_user(new_user: Users):
    try:
        resp = collection.insert_one(dict(new_user))
        return {"status": 200, "id": str(resp.inserted_id)}
    except Exception as e:
        return HTTPException(status_code=500, detail=f"Some error {e}")

@router.post("/login") # User Authentication
async def authentication(request: UserLogin):
    user = collection.find_one({"email": request.email, "password": request.password})
    if not user:
        raise HTTPException(status_code=404, detail="User not found.")
    return {"status": 200, "data": user_data(user)}

# Activities Backend
@router.post("/activities") # Create a new Activity
async def create_activity(activity: Activity):
    try:
        # Convert user_id to ObjectId
        activity_dict = activity.dict()
        activity_dict["user_id"] = ObjectId(activity.user_id)

        resp = activities_collection.insert_one(activity_dict)
        return {"status": 200, "id": str(resp.inserted_id)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {e}")
    
@router.delete("/user/{user_id}/activity/{activity_id}")
async def delete_activity(user_id: str, activity_id: str):
    result = activities_collection.delete_one({"_id": ObjectId(activity_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Activity not found.")
    return {"status": 200, "detail": "Activity deleted successfully."}


    
@router.get("/user/{user_id}") #Get user with activities
async def get_user_with_activities(user_id: str):
    user = collection.find_one({"_id": ObjectId(user_id)})
    if not user:
        raise HTTPException(status_code=404, detail="User not found.")

    # Get all activities linked to this user
    activities = list(activities_collection.find({"user_id": ObjectId(user_id)}))

    # Convert ObjectIds to strings
    user["_id"] = str(user["_id"])
    for a in activities:
        a["_id"] = str(a["_id"])
        a["user_id"] = str(a["user_id"])

    return {
        "user": user,
        "activities": activities
    }


# Clients Backend
@router.post("/clients") # Create a new Client
async def post_client(client: Client):
    try:
        # Convert user_id to ObjectId
        activity_dict = client.dict()
        activity_dict["user_id"] = ObjectId(client.user_id)

        resp = clients_collection.insert_one(activity_dict)
        return {"status": 200, "id": str(resp.inserted_id)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {e}")
    
@router.get("/client/{user_id}") # Get user with clients
async def get_user_with_clients(user_id: str):
    user = collection.find_one({"_id": ObjectId(user_id)})
    if not user:
        raise HTTPException(status_code=404, detail="User not found.")

    # Get all activities linked to this user
    clients = list(clients_collection.find({"user_id": ObjectId(user_id)}))

    # Convert ObjectIds to strings
    user["_id"] = str(user["_id"])
    for a in clients:
        a["_id"] = str(a["_id"])
        a["user_id"] = str(a["user_id"])

    return {
        "user": user,
        "clients": clients
    }


app.include_router(router)
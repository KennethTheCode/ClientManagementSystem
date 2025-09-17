
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://paulekennethd:Nethneth1@clientmanagement.agqssui.mongodb.net/?retryWrites=true&w=majority&appName=ClientManagement"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

db = client.ClientManagementSystem
collection = db["Users"]
activities_collection = db["Activities"]
clients_collection = db["Clients"]
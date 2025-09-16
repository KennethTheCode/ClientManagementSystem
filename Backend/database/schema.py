from datetime import datetime

def user_data(users):
    birthday = users.get("birthday")
    return {
        "id": str(users["_id"]),
        "email": users.get("email", ""),
        "password": users.get("password", ""),
        "birthday": birthday.strftime("%Y-%m-%d") if birthday else "",
        "address": users.get("address")
    }

def all_users(users):
    return [user_data(user) for user in users]



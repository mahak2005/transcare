from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import psycopg2
import os
import bcrypt
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

# Load environment variables
load_dotenv()

# Initialize FastAPI
app = FastAPI()

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (use specific domains in production)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Get Database URL from .env
DATABASE_URL = os.getenv("DATABASE_URL")

# Database connection function
def get_db_connection():
    conn = psycopg2.connect(DATABASE_URL)
    return conn

# Pydantic models for request validation
class UserSignup(BaseModel):
    username: str
    email: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

# Function to hash passwords
def hash_password(password: str) -> str:
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')

# Function to verify passwords
def verify_password(plain_password: str, hashed_password: str) -> bool:
    return bcrypt.checkpw(plain_password.encode('utf-8'), hashed_password.encode('utf-8'))

# Route to sign up a new user
@app.post("/signup")
def signup(user: UserSignup):
    conn = get_db_connection()
    cursor = conn.cursor()

    # Debugging logs
    print(f"Received Signup Request: {user}")

    # Check if the email already exists
    cursor.execute("SELECT * FROM users WHERE email = %s", (user.email,))
    existing_user = cursor.fetchone()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    # Hash password and insert user
    hashed_password = hash_password(user.password)
    print(f"Hashed Password: {hashed_password}")  # Debugging log

    cursor.execute("INSERT INTO users (username, email, password) VALUES (%s, %s, %s) RETURNING id",
                   (user.username, user.email, hashed_password))
    user_id = cursor.fetchone()[0]
    
    conn.commit()
    cursor.close()
    conn.close()

    return {"message": "User registered successfully", "user_id": user_id}

# Route to login a user
@app.post("/login")
def login(user: UserLogin):
    conn = get_db_connection()
    cursor = conn.cursor()

    # Debugging logs
    print(f"Received Login Request: {user}")

    # Check if the user exists
    cursor.execute("SELECT id, password FROM users WHERE email = %s", (user.email,))
    result = cursor.fetchone()
    if not result:
        print("User not found in database.")
        raise HTTPException(status_code=401, detail="Invalid email or password")

    user_id, stored_hashed_password = result
    print(f"User Found: ID={user_id}, Stored Hash={stored_hashed_password}")  # Debugging log

    # Verify the password
    if not verify_password(user.password, stored_hashed_password):
        print("Password verification failed.")
        raise HTTPException(status_code=401, detail="Invalid email or password")

    print("Login successful!")
    return {"message": "Login successful", "user_id": user_id}

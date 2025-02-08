import os
from dotenv import load_dotenv
import psycopg2

# Load environment variables from .env file
load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

# Database connection function
def get_db_connection():
    conn = psycopg2.connect(DATABASE_URL)
    return conn
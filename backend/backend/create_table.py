import os
from dotenv import load_dotenv
import psycopg2

# Load environment variables from .env file
load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

# Function to connect to the database
def get_db_connection():
    conn = psycopg2.connect(DATABASE_URL)
    return conn

# Function to create the users table
def create_users_table():
    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(100) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
        """)
        conn.commit()  # Commit the changes to the database
        print("Users table created successfully!")
    except Exception as e:
        print(f"Error creating table: {e}")
    finally:
        cursor.close()
        conn.close()

# Call the function to create the users table
create_users_table()
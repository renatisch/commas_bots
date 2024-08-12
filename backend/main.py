from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from bots import fetch_bots

load_dotenv()

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://192.168.1.234:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"Message": "Backend is running"}


@app.get("/bots")
def get_bots():
    bots = fetch_bots()
    return bots

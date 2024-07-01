from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import router

origins = [
    "*"
]

api = FastAPI()
api.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api.include_router(router, prefix="/api/v1")
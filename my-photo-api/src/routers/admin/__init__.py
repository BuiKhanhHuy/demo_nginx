from fastapi import APIRouter
from .album_router import router as album_router
from .comment_router import router as comment_router
from .photo_router import router as photo_router
from .post_router import router as post_router
from .todo_router import router as todo_router
from .user_router import router as user_router

router = APIRouter()

router.include_router(album_router, prefix="/albums", tags=["albums"])
router.include_router(comment_router, prefix="/comments", tags=["comments"])
router.include_router(photo_router, prefix="/photos", tags=["photos"])
router.include_router(post_router, prefix="/posts", tags=["posts"])
router.include_router(todo_router, prefix="/todos", tags=["todos"])
router.include_router(user_router, prefix="/users", tags=["users"])

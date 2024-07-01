from fastapi import APIRouter
from .admin import router as admin_router
from .store import router as store_router

router = APIRouter()

router.include_router(admin_router, prefix="/admin", tags=["admin"])
router.include_router(store_router, prefix="/store", tags=["store"])
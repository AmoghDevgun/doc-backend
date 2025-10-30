import { Router } from "express"
import { processVoice } from "../controllers/voiceController"
import { asyncHandler } from "../middleware/asyncHandler"
import requireAuth from "../middleware/auth"

const router = Router()

// Main voice endpoint
router.post("/process", requireAuth, asyncHandler(processVoice))

export default router
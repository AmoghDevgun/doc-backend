import { Router } from "express"
import { processVoice } from "../controllers/voiceController.js"
import { asyncHandler } from "../middleware/asyncHandler.js"
import requireAuth from "../middleware/auth.js"

const router = Router()

// Main voice endpoint
router.post("/process", requireAuth, asyncHandler(processVoice))

export default router
import { Router } from "express"
import { processVoice } from "../controllers/voiceController.ts"

const router = Router()

// Main voice endpoint
router.post("/process", processVoice)

export default router
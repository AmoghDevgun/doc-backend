import express from "express"
import {
	analyzeSymptoms,
	bookAppointment,
	getUserAppointments,
	cancelAppointment,
    getAvailableDoctors,
    analyzeSymptomsVoice
} from "../controllers/appointmentController.ts"

const router = express.Router()

router.post("/analyze", analyzeSymptoms)
router.post("/book", bookAppointment)
router.post("/available", getAvailableDoctors)
router.post("/analyzeVoice", analyzeSymptomsVoice)
router.get("/user/:userId", getUserAppointments)
router.put("/cancel/:appointmentId", cancelAppointment)

export default router

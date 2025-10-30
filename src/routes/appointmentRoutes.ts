import express from "express"
import {
	analyzeSymptoms,
	bookAppointment,
	getUserAppointments,
	cancelAppointment,
    getAvailableDoctors
} from "../controllers/appointmentController.ts"

const router = express.Router()

router.post("/analyze", analyzeSymptoms)
router.post("/book", bookAppointment)
router.post("/available", getAvailableDoctors)
router.get("/user/:userId", getUserAppointments)
router.put("/cancel/:appointmentId", cancelAppointment)

export default router

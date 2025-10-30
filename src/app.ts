import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.ts"


import authRoutes from "./routes/authRoutes.ts"
import appointmentRoutes from "./routes/appointmentRoutes.ts"
import voiceRoutes from './routes/voiceRoutes.ts'
import recordsRoutes from "./routes/recordsRoutes.ts";
/*
import appointmentRoutes from "./routes/appointmentRoutes.ts"
import doctorRoutes from "./routes/doctorRoutes.ts"
import recordRoutes from "./routes/recordRoutes.ts"
import summarizerRoutes from "./routes/summarizerRoutes.ts"
import reminderRoutes from "./routes/reminderRoutes.ts"
import voiceRoutes from "./routes/voiceRoutes.ts"
*/

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())


connectDB()


app.use("/api/auth", authRoutes)
app.use("/api/appointments", appointmentRoutes)
app.use("/api/voice", voiceRoutes)
app.use("/api/records", recordsRoutes);

/*
app.use("/api/appointments", appointmentRoutes)
app.use("/api/doctors", doctorRoutes)
app.use("/api/records", recordRoutes)
app.use("/api/summarizer", summarizerRoutes)
app.use("/api/reminder", reminderRoutes)
app.use("/api/voice", voiceRoutes)
*/

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`))

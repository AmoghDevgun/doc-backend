import express from "express"
import cors from "cors"
import { connectMongo } from "./config/db.js"
import { config } from "./config/env.js"
import errorHandler from "./middleware/errorHandler.js"

import authRoutes from "./routes/authRoutes.js"
import appointmentRoutes from "./routes/appointmentRoutes.js"
import voiceRoutes from './routes/voiceRoutes.js'
import recordsRoutes from "./routes/recordsRoutes.js";
/*
import appointmentRoutes from "./routes/appointmentRoutes.ts"
import doctorRoutes from "./routes/doctorRoutes.ts"
import recordRoutes from "./routes/recordRoutes.ts"
import summarizerRoutes from "./routes/summarizerRoutes.ts"
import reminderRoutes from "./routes/reminderRoutes.ts"
import voiceRoutes from "./routes/voiceRoutes.ts"
*/

const app = express()

app.use(cors())
app.use(express.json())


connectMongo()


app.use("/api/auth", authRoutes)
app.use("/api/appointments", appointmentRoutes)
app.use("/api/voice", voiceRoutes)
app.use("/api/records", recordsRoutes);

app.get("/health", (_req, res) => {
	res.status(200).json({ ok: true })
})

app.use(errorHandler)

/*
app.use("/api/appointments", appointmentRoutes)
app.use("/api/doctors", doctorRoutes)
app.use("/api/records", recordRoutes)
app.use("/api/summarizer", summarizerRoutes)
app.use("/api/reminder", reminderRoutes)
app.use("/api/voice", voiceRoutes)
*/

const PORT = config.port
app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`))

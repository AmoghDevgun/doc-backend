import mongoose from "mongoose"
import { config } from "./env.ts"

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoUri)
        const conn = mongoose.connection
        conn.on("error", () => console.error("MongoDB connection error"))
        conn.once("open", () => console.log("MongoDB connected"))
    } catch (err) {
        console.error("MongoDB connection error")
        process.exit(1)
    }
}

export default connectDB

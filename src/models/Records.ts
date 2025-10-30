import { Schema, model, Types } from "mongoose"

const recordSchema = new Schema({
    userId: { type: Types.ObjectId, ref: "User", required: true },
    doctorId: { type: Types.ObjectId, ref: "Doctor" },
    diagnosis: { type: String },
    reports: [{
        name: String,
        url: String, // path to uploaded report
        date: Date
    }],
    summary: { type: String } // simplified explanation from Aasha
})

export default model("Record", recordSchema)

// src/models/Records.ts
import mongoose, { Schema } from "mongoose";
const RecordSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    originalFilename: { type: String, required: true },
    filePath: { type: String, required: true },
    uploadedAt: { type: Date, default: () => new Date() },
    anonymizedText: { type: String },
    aiSummary: { type: String },
    meta: { type: Schema.Types.Mixed }
});
export default mongoose.models.Record || mongoose.model("Record", RecordSchema);
//# sourceMappingURL=Records.js.map
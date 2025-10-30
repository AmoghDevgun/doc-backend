import { Router } from "express";
// ✅ Import the new controller functions
import { 
    uploadAndAnalyzeReport, 
    getRecordSummary, 
    getAllUserRecords 
} from "../controllers/recordsController.ts";

const router = Router();

// --- POST /api/records/upload ---
// Uploads and analyzes a new report
router.post("/upload", uploadAndAnalyzeReport);

// --- GET /api/records/:id ---
// Gets a single summary by its specific Record ID
router.get("/:id", getRecordSummary);

// --- POST /api/records/by-user ---
// Gets all record summaries for a specific user
router.post("/by-user", getAllUserRecords);

export default router;
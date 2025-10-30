import { Router } from "express";
import { register, login } from "../controllers/authController";
import { asyncHandler } from "../middleware/asyncHandler";
import { validateLogin, validateRegister } from "../middleware/validators/auth";
const router = Router();
router.post("/register", validateRegister, asyncHandler(register));
router.post("/login", validateLogin, asyncHandler(login));
export default router;

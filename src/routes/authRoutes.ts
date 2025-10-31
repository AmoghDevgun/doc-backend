import { Router } from "express"
import { register, login } from "../controllers/authController.js"
import { asyncHandler } from "../middleware/asyncHandler.js"
import { validateLogin, validateRegister } from "../middleware/validators/auth.js"

const router = Router()

router.post("/register", validateRegister, asyncHandler(register))
router.post("/login", validateLogin, asyncHandler(login))

export default router

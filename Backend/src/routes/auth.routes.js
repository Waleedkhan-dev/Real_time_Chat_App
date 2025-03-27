import express from "express"
import { authcheck, logout, signin, signUp, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../Modles/protectRoute.midleware.js";
const router = express.Router()
router.post("/signup", signUp)
router.post("/signin", signin)
router.post("/logout", logout)
router.post("/update-profile", protectRoute, updateProfile)
router.get("/check", protectRoute, authcheck)

export default router;
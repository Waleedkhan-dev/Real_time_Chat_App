import express from "express"
import { logout, signin, signUp } from "../controllers/auth.controller.js";
const router = express.Router()

router.post("/signup", signUp)
router.post("/signin", signin)
router.post("/logout", logout)

export default router;
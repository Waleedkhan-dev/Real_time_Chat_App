import express from "express";

import { protectRoute } from "../Modles/protectRoute.midleware.js";
import { getmessage, getuserFromSidebar, sendMessage } from "../controllers/message.controller.js";
const router = express.Router()

router.get("/user", protectRoute, getuserFromSidebar)
router.get("/:id", protectRoute, getmessage)
router.post("/send/:id", protectRoute, sendMessage)

export default router





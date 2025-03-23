import express from "express";

import { protectRoute } from "../Modles/protectRoute.midleware";

const router = express.Router()


router.post("message", MessageChannel)


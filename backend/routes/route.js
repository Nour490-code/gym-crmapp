import express from "express";
import { dashboard } from "../controllers/gym.controllers.js";

const router = express.Router();

router.get("/", dashboard)

export default router
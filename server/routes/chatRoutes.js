import { Router } from "express";
import { getContentFromGeminiAi } from "../controllers/chatController.js";

const chatRoutes = Router();

chatRoutes.post("/content", getContentFromGeminiAi);

export default chatRoutes;
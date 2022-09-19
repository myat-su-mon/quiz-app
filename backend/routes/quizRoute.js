import express from "express";
import { getQuiz, storeQuiz } from "../controllers/QuizController.js";

const router = express.Router();

router.get("/", getQuiz);

router.post("/", storeQuiz);

export default router;
import express from "express";
import dotEnv from "dotenv";
import mongoose from "mongoose";
import quizRouter from "./routes/quizRoute.js";
import cors from "cors";

const app = express();
dotEnv.config();

const port = process.env.PORT;
const mongoclient = process.env.DB_URL;

app.use(express.json);
app.use(cors());

app.use('/api/quiz', quizRouter);

app.listen(port, (e) => {
    if (e) return console.log(e);
    console.log(`Server Running on Port ${port}`);

    mongoose.connect(mongoclient, (e) => {
        if (e) return console.log(e);
        console.log('Database connected');
    })
});

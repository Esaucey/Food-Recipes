import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/user.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter)

mongoose.connect(
  "mongodb+srv://mermer:mermer123@cluster0.wzql9o7.mongodb.net/recipes?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.listen(3001, () => console.log("server is running"))
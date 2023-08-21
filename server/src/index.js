import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

import { userRouter } from "./routes/user.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter)


mongoose.connect(
  process.env.CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => {
  app.listen(3001, () => console.log("server is running"))
}).catch((error) => {
  console.log(error.message)
});


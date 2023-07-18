import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute  from"./routes/userRoute.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to DB");
  } catch (error) {
    console.log(error);
  }
};
app.use("/api/user", userRoute);

app.listen(8800, () => {
  connect();
  console.log("backend is runnnig !");
});

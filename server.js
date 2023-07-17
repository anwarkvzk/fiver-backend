const express = require("express");
const mongoose = require("moongoose");
const dotenv = require("dotenv");

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

app.listen(8800, () => {
  connect();
  console.log("backend is runnnig !");
});

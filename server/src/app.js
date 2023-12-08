import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "dotenv/config"

const app = express();
app.use(bodyParser.json());

mongoose
  .connect(process.env.DEV_DATABASE)
  .then(()=>{
    app.use(express.json())
    console.log("database connected successfully")
  })
  .catch((err)=>{
    console.log(`DB connection error:${err}`);
 });;

export default app;

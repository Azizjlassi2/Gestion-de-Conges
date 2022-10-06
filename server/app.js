import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


const app = express();
app.use(cors({
    origin:"*"
}))
// handling routes

import authRoutes from "./routes/authRoutes.js";

app.use("/auth" , authRoutes );



// middleware

dotenv.config();
app.use(express.json());


// env variables

const port = process.env.PORT;
const url = process.env.URL;

// connecting to mongoDB


mongoose.connect( url , ()=>{
    console.log("connected to mongoDB !");
})


// launching the app

app.listen( port , ()=>{
    console.log(`listening to requests on port ${port}`);
})
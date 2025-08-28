import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import  aboutRoute from "./api/routes/about-route.js"

// dotenv
dotenv.config()
const PORT = process.env.PORT || 5000
const MongoDB = process.env.MongoDB || "mongodb://localhost:27017/test"

//server
const app = express();
app.use(express.json());


//routes
app.use ("/api/about", aboutRoute);

// cors
app.use(cors())
// server runner
app.listen(PORT, console.log(`🚀 Server is running on ${PORT}`))


// mongodb 
mongoose.connect(MongoDB, console.log(`✅ MongoDB connected`))
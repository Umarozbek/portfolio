import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import  aboutRoute from "./api/routes/about-route.js"
import  blogRoute from "./api/routes/blog-route.js"
import  contactRoute from "./api/routes/contact-route.js"
import  portfolioRoute from "./api/routes/portfolio-route.js"

// dotenv
dotenv.config()
const PORT = process.env.PORT || 5000
const MongoDB = process.env.MongoDB || "mongodb://localhost:27017/test"

//server
const app = express();
app.use(express.json());


//routes
app.use ("/api/about", aboutRoute);
app.use ("/api/blog", blogRoute);
app.use ("/api/contact", contactRoute);
app.use ("/api/portfolio", portfolioRoute);

// cors
app.use(cors())
// server runner
app.listen(PORT, console.log(`🚀 Server is running on ${PORT}`))


// mongodb 
mongoose.connect(MongoDB, console.log(`✅ MongoDB connected`))
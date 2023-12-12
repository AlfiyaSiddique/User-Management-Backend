// Required Imports
import express, { json } from "express";
import cors from "cors"
import controllers from "./controllers.js";

// Create Express App
const app = express();

// Parse req.body
app.use(json())

// Implement Cors to allow requests only from frontend
  const corsOptions = {
    origin: " 'https://bucolic-douhua-f509d2.netlify.app'"
    // origin: "http://localhost:3000" for local environment
  };
app.use(cors(corsOptions))


// Routes
app.get("/", (req,res)=>{
    res.send("Working")
})

app.post("/login", controllers.login)
// app.get("/users", controllers.login)

app.listen(5000, (err)=>{
    if(!err){
        console.log("Server is running on port 5000")
    }
})

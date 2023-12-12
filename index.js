import express, { json } from "express";
import cors from "cors"
const app = express();

app.use(json())
app.use(cors())

app.get("/", (req,res)=>{
    res.send("Working")
})

app.listen(5000, (err)=>{
    if(!err){
        console.log("Server is running on port 5000")
    }
})

import express from "express"
import dotenv from "dotenv"
dotenv.config()

const port=process.env.PORT || 5000

const app=express()

app.get("/health",(req,res)=>{
   return res.status(200).json({message:"Everything is 🆗"})
})
app.get("/",(req,res)=>{
   return res.status(200).json({message:"hello kj, how are you... ???"})
})

app.listen(port,()=>{
    console.log(`server started ${port}`)
})
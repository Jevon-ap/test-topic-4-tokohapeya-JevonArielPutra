const express = require("express")
const dotenv = require("dotenv")
const app = express()
dotenv.config();
const PORT =  process.env.PORT

app.get("/api",(req,res)=>{
    res.send("Heelo world")
})
app.listen(PORT ,()=>{
    console.log("testing port "+ PORT)
})
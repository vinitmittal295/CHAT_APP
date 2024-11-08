const express=require("express")
const dotenv=require("dotenv")
const {chats} =require("./data/data.js")
const connectDB = require("./config/db.js")
const colors=require("colors")
dotenv.config()

const app=express()
app.use(express.json())


connectDB()


const userRoutes=require("./Routes/userRoutes.js")
app.use("/api/user",userRoutes)

const PORT=process.env.PORT || 5000
app.listen(PORT,console.log(`server is running on port ${PORT}`.yellow.bold))

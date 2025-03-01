const express = require('express')
const app = express()

const router=require("./src/routes/taskroutes")
const mongoose = require('mongoose')
require('dotenv').config()
const DBCONNECTIONLINK=process.env.DBCONNECTIONLINK
const port =process.env.PORT

mongoose.connect(DBCONNECTIONLINK)
.then(()=>{
    console.log("db connected")
})
.catch((error)=>{
  console.log(error)
    console.log("db not connected")
})


app.use(express.json())
 app.use("/task",router)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
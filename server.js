const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://Kyle:mongodbtest@cluster0.e1p6b.mongodb.net/footballDB")

app.use("/", require("./routes/taskRoute"))

app.listen(3001, function(){
    console.log('express server running')
})
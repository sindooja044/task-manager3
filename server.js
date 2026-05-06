const express=require('express');
const mongoose= require('mongoose')
const connectDB=require('./config/db');
const taskRoutes=require('./routes/taskRoutes');
const cors=require('cors')

const app= express();
app.use(cors())
app.use(express.json());
PORT= process.env.PORT || 5000
console.log("server started")


connectDB();
app.listen(PORT, ()=>{
    console.log("mongoDB connected");

})
app.use("/api/tasks", taskRoutes)

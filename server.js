const express=require('express');
const mongoose= require('mongoose')
const connectDB=require('./config/db');

const app= express();
app.use(express.json());
console.log("server started")
connectDB(()=>console.log("mongoDB connected"));
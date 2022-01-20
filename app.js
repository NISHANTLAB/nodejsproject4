const express=require('express');
const app=express();
const dotenv = require('dotenv');
const PORT = process.env.PORT || 9000
const passApi =require('./api/router');
const path = require('path');
dotenv.config({path:'config.env'})
const bodyparser = require('body-parser');
const connectDB = require("./connection/db/db");
//mongodb connection:
connectDB();

//post the data to database by using app.use(express.json())
app.use(express.json());

app.use(bodyparser.urlencoded({extended:true}));
//To create Restful API:by using app.use
app.use('/api',passApi);
app.use('/api',passApi);
app.use('/api',passApi);
app.use('/api',passApi);
app.use('/api',passApi);



app.listen(PORT,()=>{
    console.log(`PORT is running on ${PORT}`);
});

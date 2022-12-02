/*const mongoose=require("mongoose");
const connectdb=mongoose.connect("mongodb://localhost:27017/pitchess-api",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("coonection successful");
}).catch((e)=>{
    console.log("no connection");
})*/
const { application } = require("express");
const mongoose = require("mongoose");
const connectDB = async (url)=>{
    return mongoose.connect(url)
}
module.exports = connectDB;
//const connectDB=require('./config/mongoose');
//module.exports=connectdb;

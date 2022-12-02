const express=require("express");
//require("./db/conn");
const port = 8081;
const connectDB=require('./db/conn');
const app=express();
const path= require('path');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
//error//////////////////
app.use('/',require('./routes/index'));

const start = async() =>{
    try {
        const url = 'mongodb://localhost:27017/pitchessapi';
        await connectDB(url);
        app.listen(port,function(){
            console.log(`Serverrr running at port:${port}`);
        });
    } catch (error) {
        console.log("**************errorrr");
        //console.log(error);
    }
    
}
start();


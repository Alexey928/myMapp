const express = require("express");
const app = express();
const sequelize = require("./db");
const fileUpload = require('express-fileupload')
const cors = require('cors');
const path = require("path");
const errorHandler = require("./Midelware/ErrorHendleMidelware")
const PORT = process.env.PORT || 5000;



app.use(express.json());

app.use(errorHandler);

const start = async ()=>{
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT,()=>console.log(`port ${PORT} started`));//
        console.log("CORS-enabled web server listening on port 80");
    }catch(e){
        console.log(e);
    }
}




app.listen(4001,()=>{
    console.log('port started #4001')});


app.get("/",(req,res)=>{
     res.status(200).json({masege:"working"});
 });



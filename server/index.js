const express = require("express");




const app = express();

app.use(express.json());


app.listen(4001,()=>{
    console.log('port started #4001')});


app.get("/",(req,res)=>{
     res.status(200).json({masege:"working"});
 });



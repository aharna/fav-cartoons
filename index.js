const express=require('express')
const app= express()
const bodyParser = require('body-parser')
const fs = require ('fs')



app.get("/", function (req,res){
    res.end("Hello, you are doing great!");
})

app.get("/cartoons", function (req,res){
    fs.readFile(__dirname+ '/'+ 'cartoon.json',(err,data)=>{
        res.end(data);
    })
    
})

app.listen(4000, function(){
    console.log("server is running")
})
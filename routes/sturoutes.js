const express=require("express");
const route=express.Router();
route.get("/home",(req,res)=>{
    res.send("<h1>welcome to home page</h1>")
})

module.exports=route;
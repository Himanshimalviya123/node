// const express=require("express");
// const route=express.Router();
// route.get("/home",(req,res)=>{
//     res.send("<h1>welcome to home page</h1>")
// })
// route.get("/course",(req,res)=>{
//     res.send("<h1>this is our course</h1>")
// })
// route.get("/department",(req,res)=>{
//     res.send("<h1>i am cse department</h1>")
// })
// route.get("/fees",(req,res)=>{
//     res.send("<h1>this is our fees<h1>")
// })

// module.exports=route;
//////////////////////////////////////////
const express=require("express");
const route=express.Router();
const stucontroller=require("../controller/stucontroller")
route.get("/home",stucontroller.Homepage)
route.get("/about",stucontroller.aboutpage)
route.get("/subject",stucontroller.subjectpage)
route.get("/fees",stucontroller.feespage)


module.exports=route;
// const http=require("http")
// http.createServer((req,res)=>{
// res.write("<h1>welcome to cybrom</h1>");
// res.end();
// }).listen(4000)
/////////////////////////////user define module //////////////////////////////////////////////////

// const http=require("http")
// const Data=require("./cybrom")
// http.createServer((req,res)=>{
//       res.write("<h1>module</h1>");
//       res.write( Data.Myname())
//       res.write(Data.Myclass())
//       res.end();
// }).listen(8000)

////////////////////////////(fs module)/////////////////////////////////
// var http=require("http")
// var fs=require("fs")
// http.createServer((req,res)=>{
//       fs.readFile("raj.txt",(err,data)=>{
//             if(err) throw err;
//             res.write(data);
//             res.end();
//       })
// }).listen(5000)
//////////////////////(fs appenfile )side me data aata hai///////////////////////////
// const fs=require("fs");
// fs.appendFile("raj.txt","hi i am himanshi malviya",(err)=>{
//       if(err)throw err;
//       console.log("file created!!!");
      
// })
////////////////////(fs open file)pdf file create ho jati hai//////////////
// const fs=require("fs");
// fs.open("raju.pdf","w",(err,file)=>{
//       if(err)throw err;
//       console.log("file created!!!");
      
// })
//////////////////(fs write file) data replace ho jati hai//////////////
// const fs=require("fs");
// fs.writeFile("ram.txt","hi i amgoing to lanka",(err)=>{
//       if(err)throw err;
//       console.log("file created!!!");
      
// })
/////////////////////////////update file//////////////////////////

/////////////////////////////delete file//////////////////////////
// const fs=require("fs")
// fs.unlink("raj.txt",(err)=>{
//       if(err) throw err;
//       console.log("file deleted");
      
// })
////////////////////rename file////////////////////////
const fs=require("fs")
fs.rename("ram.txt","lakhan.txt",(err)=>{
if(err)throw err;
console.log("file renamed");

})
 
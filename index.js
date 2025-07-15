// const http=require("http")
// http.createServer((req,res)=>{
// res.write("<h1>welcome to cybrom</h1>");
// res.end();
// }).listen(4000)
/////////////////////////////user define module //////////////////////////////////////////////////

const http=require("http")
const Data=require("./cybrom")
http.createServer((req,res)=>{
      res.write("<h1>module</h1>");
      res.write( Data.Myname())
      res.write(Data.Myclass())
      res.end();
}).listen(8000)

 
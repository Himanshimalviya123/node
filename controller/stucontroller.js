const Homepage=(req,res)=>{
    res.send("<h1>welcome to home page </h1>")
}
const subjectpage=(req,res)=>{
    res.send("<h1>this is student subject page")
}
const feespage=(req,res)=>{
    res.send("<h1>this is student fees record")
}
const aboutpage=(req,res)=>{
    res.send("<h1>this is student about page")
}
module.exports={
    Homepage,
    subjectpage,
    feespage,
    aboutpage,
}
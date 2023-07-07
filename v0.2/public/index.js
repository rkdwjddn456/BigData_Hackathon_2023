const express=require("express");
const app=express();
const port=5000;
//app.use('/style', express.static('style', { 'extensions': ['css'], 'index': false, 'fallthrough': false, 'setHeaders': (res, path) => { res.setHeader('Content-Type', 'text/css'); } }));
server.use(express.static(__dirname + "/style"));
app.listen(port,() =>{
    console.log("서버 정상적 실행");
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/Mainpage.html')
});
// 문화, 의료, 직업
app.get("/culture",(req,res)=>{
    res.sendFile(__dirname + '/Category/Culture.html')
});

app.get("/job",(req,res)=>{
    res.sendFile(__dirname + '/Category/Job.html')
});

app.get("/medical",(req,res)=>{
    res.sendFile(__dirname + '/Category/Medical.html')
});

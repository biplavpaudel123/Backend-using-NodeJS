const fs = require('fs');
const path= require('path');
const https= require('https');
const express= require('express');


const PORT=9000;

const app= express();
function checkedLoggedIn(req,res,next){
const isLoggedIn=true;
if (!isLoggedIn){
return res.status(401).json({
      eror:'You must log in!',
});
}
next();
}

app.get('/auth/google',(req,res)=>{});
app.get('/auth/google/callback',(req,res)=>{});
app.get('/auth/logout',(req,res)=>{});


app.get('/secret',checkedLoggedIn,(req,res)=>{
    return  res.send('Your secret value is 42!');
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});

https.createServer({
    cert:fs.readFileSync('./cert.pem'),
    key:fs.readFileSync('./key.pem'),
},app).listen(PORT,()=>{
    console.log(`Listening in port ${PORT}`);
});
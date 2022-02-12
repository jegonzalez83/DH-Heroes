const express = require('express');
const app = express();
const PORT = 3030;
const path = require('path')
app.listen(PORT,()=>{
    console.log("servidor escuchando")
});
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, '/views/index.html'))
});
app.get('/babbage',(req, res)=>{
    res.sendFile(path.join(__dirname, '/views/babbage.html'))
});
app.get('/berners',(req, res)=>{
    res.sendFile(path.join(__dirname, '/views/berners.html'))
});
app.get('/clarke',(req, res)=>{
    res.sendFile(path.join(__dirname, '/views/clarke.html'))
});
app.get('/hamilton',(req, res)=>{
    res.sendFile(path.join(__dirname, '/views/hamilton.html'))
});
app.get('/hopper',(req, res)=>{
    res.sendFile(path.join(__dirname, '/views/hopper.html'))
});

app.get('/lovelace',(req, res)=>{
    res.sendFile(path.join(__dirname, '/views/lovelace.html'))
});
app.get('/turing',(req, res)=>{
    res.sendFile(path.join(__dirname, '/views/turing.html'))
});
app.use(express.static(path.join(__dirname,'public')));
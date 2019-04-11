
const express = require("express");
const fs = require("fs");

const app = express();

app.post("/arquivo",(req,res,next)=>{
    //let conteudo = req.body;
    req.pipe(fs.createWriteStream("arquivoStream.jpg")).on("finish",(erro)=>{
        res.status(200).send();
    });    
});

app.listen("3000",()=>{
    console.log("Funcionando");
});
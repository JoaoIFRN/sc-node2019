const express = require("express");

require("marko/node-require");
const markoExpress = require("marko/express");

const app = express();

app.use(markoExpress());

const template = require("./view/lista");
const template2 = require("./view/contador");

app.use((error,req,res,next)=>{
    res.status
});

app.get("/",(req,res)=>{
    res.marko(template,{livros:[
        {
            id: 1,
            nome: "Nárnia"
        },
        {
            id: 2,
            nome: "Joana"            
        }
    ]});
});

app.get("/contador",(req,res)=>{
    res.marko(template2);
});

app.listen(3000,()=>{console.log("Rodando")});
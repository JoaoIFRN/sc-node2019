require("marko/node-require"); //Marko

const express = require("express");

var markoExpress = require("marko/express"); //Marko

const app = express();

app.use(markoExpress());    //Marko

app.use(express.static("public")); //Carregar arquivos estáticos

app.get("/",(req,res)=>{
    res.marko(require("./pages/template"),
    {
        nome : "João gatinho",
        alunos : [
            {
                id : 1,
                nome : "Maykon"
            },
            {
                id : 2,
                nome : "Alex"
            }
        ]
    });
});

app.listen(3000,()=>{
    console.log("Rodando");
});
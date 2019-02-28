//md exemplo3
//npm init -y
//npm i express --save
const express = require("express");

const app = express();

//Roteamento básico
const rotasBasicas = require("./rotas-basicas");
rotasBasicas(app);
//Roteamento encadeado
const rotasBasicas2 = require("./rotas-basicas2");
app.get("/funcoes",rotasBasicas2);
//Roteamento com Router
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Raíz do router");
});

router.get("/lista",(req,res)=>{
    res.send("Lista do router");
});

app.use("/clientes",router);


app.listen(3000);
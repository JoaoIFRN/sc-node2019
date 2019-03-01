const express = require("express");
const routers = express.Router();
const controller = require("../controllers/livros-controllers")

routers.get("/",(req,res,next)=>{
    res.status(200).send(req.body);
});

routers.get("/",(req,res,next)=>{
    res.status(200).send({
        livros : [
        {
            id: 1,
            nome: "Livro 1"
        },
        {
            id: 2,
            nome: "Livro 2"
        }
    ]});
});

routers.post("/",(req,res,next)=>{
    console.log(req.body);
    res.status(201).send(req.body);
});

module.exports = routers;
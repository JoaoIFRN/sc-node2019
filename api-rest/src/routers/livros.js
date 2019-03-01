const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/livros")

routers.get("/",controllers.listarLivros);
routers.post("/",controllers.criarLivro);

module.exports = routers;
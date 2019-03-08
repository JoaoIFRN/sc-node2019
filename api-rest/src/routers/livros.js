const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/livros");

routers.get("/",controllers.listarLivros);
routers.get("/:id",controllers.buscarUmLivro);
routers.delete("/:id",controllers.excluirLivro);
routers.post("/",controllers.criarLivro);
routers.put("/:id",controllers.atualizarLivro);

module.exports = routers;
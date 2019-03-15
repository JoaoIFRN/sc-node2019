const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/autores");

routers.get("/",controllers.listarAutores);
routers.post("/",controllers.criarAutor);

module.exports = routers;
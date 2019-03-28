const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/autores");
const autorizar = require("../services/auth-service");

routers.get("/",controllers.listarAutores);
routers.post("/",autorizar.autorizar, controllers.criarAutor);

module.exports = routers;
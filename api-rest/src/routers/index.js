const express = require("express");
const routers = express.Router();

routers.get("/",(req,res,next)=>{
    res.status(200).send({
        name : "Exemplo API-REST com Node",
        version : "1.0.0"
    });
});

module.exports = routers;
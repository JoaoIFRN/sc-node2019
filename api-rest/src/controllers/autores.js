

const Autor = require("../models/autores");
const Status = require("http-status");

exports.listarAutores = (req,res,next)=>{
    Autor.findAll({attributes: ["id","nome"]}).then((autores)=>{
        res.status(Status.OK).send(autores);
    }).catch((erro)=>{
        next(erro);
    });
};

exports.criarAutor = (req,res,next)=>{
    let autor = req.body;
    Autor.create(autor).then((novoAutor)=>{
        res.status(Status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};
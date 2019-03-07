
const Livro = require("../models/livros");
const Status = require("http-status");


exports.listarLivros = (req,res,next)=>{
    Livro.findAll().then((livros)=>{
        res.status(Status.OK).send(livros);
    }).catch((erro)=>{
        next(erro);
    });
};

exports.criarLivro = (req,res,next)=>{
    console.log(req.body);
    const livro = req.body;
    Livro.create(livro).then(()=>{
        res.status(Status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};
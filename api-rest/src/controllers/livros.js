
const Livro = require("../models/livros");
const Status = require("http-status");

exports.listarLivros = (req,res,next)=>{
    Livro.findAll({attributes: ['id', 'nome','descricao'],
        include:[{
            model: require("../models/autores"),
            required: true
        }]
    }).then((livros)=>{
        res.status(Status.OK).send(livros);
    }).catch((erro)=>{
        next(erro);
    });
};

exports.criarLivro = (req,res,next)=>{    
    const livro = req.body;
    const idsAutores = livro.autores;
    Livro.create(livro).then((novoLivro)=>{
        novoLivro.setAutors(idsAutores).then().catch();
        res.status(Status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};

exports.buscarUmLivro = (req,res,next)=>{
    let id = parseInt(req.params.id);
    Livro.findById(id).then((livro)=>{
        if (livro){
            res.status(Status.OK).send(livro);
        }else{
            res.status(Status.NOT_FOUND).send();     
        }
    }).catch((erro)=>{
        next(erro);
    });
};

exports.excluirLivro = (req,res,next) => {
    let id = parseInt(req.params.id);
    Livro.findById(id).then((livro)=>{        
        if (livro){
            Livro.destroy({ where: {id : id}}).then(()=>{
                res.status(Status.OK).send();
            }).catch((erro)=>{
                next(erro);
            });
        }else{
            res.status(Status.NOT_FOUND).send();
        }
    }).catch((erro)=>{
        next(erro);
    });
};

exports.atualizarLivro = (req,res,next)=>{
    let id = parseInt(req.params.id);    
    let livroBody = req.body;    
    if (!livroBody || !id){
        res.status(Status.NO_CONTENT).send();
    }else{
        Livro.findById(id).then((livro)=>{
            if (livro){
                Livro.update({nome: livroBody.nome, descricao : livroBody.descricao},{where : {id : id}}).then(()=>{
                    res.status(Status.OK).send();
                }).catch((erro)=>{
                    next(erro);
                });
            }else{
                res.status(Status.NOT_FOUND).send();
            }
        }).catch((erro)=>{
            next(erro);
        });
    }
};
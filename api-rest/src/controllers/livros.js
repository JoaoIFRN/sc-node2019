

exports.listarLivros = (req,res,next)=>{
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
};

exports.criarLivro = (req,res,next)=>{
    console.log(req.body);
    res.status(201).send(req.body);
};
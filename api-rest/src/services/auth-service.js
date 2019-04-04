const jwt = require("jsonwebtoken");
const Status = require("http-status");
const config = require("../config/config");

exports.geraToken = (dados) => {
    return jwt.sign(dados,global.SECRET,{expiresIn: '1d'});
};

exports.decodeToken = (token) => {
    let dados = jwt.verify(token,global.SECRET);
    return dados;
};

exports.autorizar = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['x-acess-token'];

    if (!token){
        res.status(Status.UNAUTHORIZED).json({
            mensagem : "Acesso negado"
        })
    }else{
        jwt.verify(token,global.SECRET,(erro,dados) => {
            if (erro){
                res.status(Status.UNAUTHORIZED).json({
                    mensagem : "Token inválido"
                });
            }else{
                console.log("Usuário: ", dados.email)
                next();
            }
        });
    }
};
//Mais roteamento
function atender1(req,res,next){
    console.log("Hora: ", Date.now());
    next();
}

function atender2(req,res,next){
    res.send("Resposta para encadeamento de funções");
}

module.exports = [atender1, atender2];
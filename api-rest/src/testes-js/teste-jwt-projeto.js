const auth = require("../services/auth-service");

console.log(auth.geraToken({id: "1", senha: "joao@ifrn.edu.br"}));
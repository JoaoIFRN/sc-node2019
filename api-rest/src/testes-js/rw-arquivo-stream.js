





const fs = require("fs");

fs.createReadStream("arquivo1.jpg").
    pipe(fs.createWriteStream("arquivo3.jpg")).on("finish",(erro)=>{
        console.log("Acabou");
    });

console.log("Após os comandos de stream");
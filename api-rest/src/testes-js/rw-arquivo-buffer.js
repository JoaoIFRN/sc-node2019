



const fs = require("fs");

fs.readFile("arquivo1.jpg",(erro,buffer)=>{
    console.log("leu o arquivo1.jpg")
    if (erro){
        console.log(erro);
    }
    if (!erro){
        fs.writeFile("arquivo2.jpg",buffer,(erro)=>{
            console.log("escreveu o arquivo2.jpg")
        });
    }
});

//let conteudo = fs.readFileSync("arquivo1.jpg");
//console.log(conteudo);
console.log("Após a leitura");
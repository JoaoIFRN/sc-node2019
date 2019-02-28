console.log("Alô mundo");

const http = require("http");

//console.log(typeof(http));

var servidor = http.createServer((req,res)=>{
    if (req.url == "/"){
        res.write("Raíz");
    }
    if (req.url == "/lista"){
        res.write("Lista");
    }        
    res.end();
});

servidor.listen(3000);


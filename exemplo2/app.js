


const express = require("express");

var app = express();

app.listen(3000,()=>{
    console.log("Servidor ligado");
});

app.get("/",(req,res)=>{
    res.send("Alô mundo");
});

app.get("/lista",(req,res)=>{
    res.send(`
        <html>
            <head>
            </head>
            <body>
                <h1>Lista</h1>
            </body>
        </html>
    `);
});


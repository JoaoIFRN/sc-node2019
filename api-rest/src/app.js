const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.listen(3000,()=>{
    console.log("Está funcionando!");
});

app.use("/",require("./routers/index"));
app.use("/livros",require("./routers/livros"));
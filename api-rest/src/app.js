const express = require("express");
const Status = require("http-status");
//const bodyParser = require("body-parser");

const app = express();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());

app.listen(3000,()=>{
    console.log("Está funcionando!");
});

app.use("/",require("./routers/index"));
app.use("/livros",require("./routers/livros"));
app.use((req, res, next) => {
    res.status(Status.NOT_FOUND).send();
});
app.use((error,req, res, next) => {
    res.status(Status.INTERNAL_SERVER_ERROR).json({error});
});


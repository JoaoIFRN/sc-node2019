const express = require("express");
const Status = require("http-status");
//const bodyParser = require("body-parser");

const app = express();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended : false}));

app.use(express.json());
app.use("/",require("./routers/index"));
app.use("/livros",require("./routers/livros"));
app.use((req, res, next) => {
    res.status(Status.NOT_FOUND).send();
});
app.use((error,req, res, next) => {
    console.log(error);
    res.status(Status.INTERNAL_SERVER_ERROR).json({error});
});

const sequelize = require("./config/database");
sequelize.sync({force : true}).then(()=>{
    app.listen(3000,()=>{
        console.log("Está funcionando!");
    });
}).catch((erro)=>{
    console.log(erro);
});


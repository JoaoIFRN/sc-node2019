const express = require("express");
const Status = require("http-status");

const app = express();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended : false}));

app.use(express.json());
app.use("/",require("./routers/index"));
app.use("/livros",require("./routers/livros"));
app.use("/autores",require('./routers/autores'));
app.use("/usuarios",require('./routers/usuarios'));
app.use((req, res, next) => {
    res.status(Status.NOT_FOUND).send();
});
app.use((error,req, res, next) => {
    console.log(error);
    res.status(Status.INTERNAL_SERVER_ERROR).json({error});
});

const sequelize = require("./config/database");
sequelize.sync({force : false}).then(()=>{
    app.listen(3000,()=>{
        console.log("Está funcionando!");
    });
}).catch((erro)=>{
    console.log(erro);
});


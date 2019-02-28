module.exports = (app) => {

    app.get("/", (req,res) => {
        res.send("Get para raíz (/)");
    });
    
    
    app.get("/alunos",(req,res)=>{
        res.send("Get para /alunos");
    });

};
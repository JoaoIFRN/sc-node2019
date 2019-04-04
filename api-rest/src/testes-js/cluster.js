const cluster = require("cluster");
const os = require("os");

const cpus = os.cpus();

if (cluster.isMaster){
    cpus.forEach(()=>{
        cluster.fork();
    });    

    cluster.on("listening",worker=>{
        console.log(worker.process.pid);
    });

    cluster.on("exit",worker=>{
        cluster.fork();
    });

}else{
    require("../app.js");
}
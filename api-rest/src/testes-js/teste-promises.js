/*

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Promise 1 com sucesso");
        resolve("Sucesso");
    },2000);
});

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Promise 2 com sucesso");
        reject("Sucesso");
    },2000);
});


promise1.then((resultado)=>{
    console.log("Excutado com sucesso");
    console.log(resultado);
}).catch((error)=>{
    console.log("Exeutado com erro");
});


Promise.all([promise1,promise2]).then(()=>{
    console.log("Todos com sucesso");
}).catch((error)=>{
    console.log("Pelo menos um erro");
});

console.log("Passou aqui");
*/

console.log(process.env.windir)
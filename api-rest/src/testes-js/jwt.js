


const {sign, verify} = require("jsonwebtoken");
const secret = "123";
const token = sign({id: 1,nome: "joao"},secret);
console.log(token);

verify(token,secret,(error,payload)=>{
    console.log(payload);
});
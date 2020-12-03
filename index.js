const gets = require('prompt-sync')();

let X = parseInt(gets());
let Z= parseInt(gets());
let conta = 0;
let soma = 0;

if (X < Z) {
  soma = X;
  if (X < 0 && Z < 0){
    conta--;
  }; 
  while (soma <= Z){
    soma += X;
    X++;
    conta++;
  }; 
} else {
  while (Z <= X){
  Z = parseInt(gets());
  };    
  while (soma <= Z){
    soma += X;
    X++;
    conta++;
  };
    
};

console.log(conta);
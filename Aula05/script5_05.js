let num,res;
const saida=document.querySelector(".saida");
num=parseInt(prompt("Digite um número"));
msg = num%2==0? "PAR" : "ÍMPAR" ; //Ternário.
saida.innerHTML = `${num} - ${msg}`;
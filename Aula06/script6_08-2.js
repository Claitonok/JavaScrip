const saida=document.querySelector('.saida');
const produto=["monitor","teclado","mouse"];
let i=0;
for(let j in produto){
    i++;
    saida.innerHTML+=`< h${i}>${produto[j]}< /h${i}>`;
}
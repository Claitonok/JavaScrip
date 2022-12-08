
const saida=document.querySelector('.saida');

const produto = ["teclado","monitor","mouse"];
const cor=["azul","cinza","amarelo"];

for(let i=0;i<produto.length;i++){
    saida.innerHTML+=`${i} - ${produto[i]} - ${cor[i]} <br>`;
}


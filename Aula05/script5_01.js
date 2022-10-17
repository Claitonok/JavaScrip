let a,b;
const saida=document.querySelector(".saida");
a = 5;
b = "5";
if (a == b) {
  saida.innerHTML =`a = ${a}, b = ${b}<br>`;
  saida.innerHTML +=`A variável A é igual a variável B`;  
}
let a,b;
const saida = document.querySelector(".saida");/* class */
const s = document.querySelector("#s");/* id */
const h1 = document.querySelector("h1");/* nome da tag */
a = 5;
b = "5";
if (a == b) {
  saida.innerHTML =`a = ${a}, b = ${b}<br>`;
  saida.innerHTML +=`A variável A é igual a variável B`;  
}else{
  saida.innerHTML =`os valores não estão corretos `;//você colocou essa parte!
}
const saida1 = document.querySelector("#saida1");//id="saida1"
const saida2 = document.querySelector(".saida2");//class="saida2"
const h1 = document.querySelector("h1");
const body = document.querySelector("body");
let cor = prompt("Digite uma cor em inglês: ");

body.style.backgroundColor = cor;

h1.innerHTML += " - Aula de hoje";
h1.innerHTML += " " +cor;

h1.style.color = "white";//cor do texto
h1.style.backgroundColor = "blue";//cor do texto

saida1.innerHTML ="Um primeiro teste<br>";
saida1.innerHTML +="Outro teste<br>";

saida2.innerHTML = "Mais um teste<br>";



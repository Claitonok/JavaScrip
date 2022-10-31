let destino;
const saida = document.querySelector(".saida");
destino = prompt("digite seu distino: ");
destino=destino.toLocaleUpperCase();

if (destino == "SÃO PAULO") {
    saida.innerHTML += `Seja bem vindo a cidade que nunca para!`;

} else if (destino == "NEW YORK") {
    saida.innerHTML += `seja bem vindo a BIG APPLE`;

} else if (destino==`CLAITON`) {
    saida.innerHTML+=`ok`;
}else{
saida.innerHTML += `nao entramos seu destino`;
}
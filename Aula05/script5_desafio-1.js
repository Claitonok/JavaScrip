let av1, av2,media;
const saida = document.querySelector(".saida");
av1 = parseFloat(prompt("Digite a nota AV1"));
av2 = parseFloat(prompt("Digite a nota AV2"));
media = (av1 + av2) / 2;

saida.innerHTML += "media (6), Fique esperto <br>";
saida.innerHTML += `AV1, nota = ${av1} <br> AV2, nota = ${av2} <br>`;
saida.innerHTML += "";      

if (media >= 6){
    saida.innerHTML += "Aprovado - Parabéns <br>";
    saida.innerHTML += `sua media foi : ${media}<br>`;
}else {
    saida.innerHTML += "reprovado <br>" ;
    saida.innerHTML += `sua media foi : ${media}<br>`;
}
  

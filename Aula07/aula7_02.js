/*
Criar 3 campos de formulário:
Nome
Nota AV1
Nota AV2

Depois criar uma função para calcular a média entre AV1 e AV2 
e mostrar os dados na div class="saida":
Nome
Nota AV1
Nota AV2
Média final
*/

const saida=document.querySelector(".saida");
const nome=document.querySelector("#nome");
const av1=document.querySelector("#av1");
const av2=document.querySelector("#av2");
const btn1=document.querySelector(".btn1");
const btn2=document.querySelector(".btn2");

btn1.onclick=calcmedia; //ação de botão pela(function)
btn1.onclick=boas_vindas;//sobre poie essa função,só fais um de cada vez!

//addEventListener(mantem o calculo e imprime a String)
btn2.addEventListener("click", calcmedia);
btn2.addEventListener("click", boas_vindas);

function boas_vindas(){//construção da função
    saida.innerHTML+="Seja bem vindo!<br>";
}


function calcmedia(){//construção da função
        /* como calcular a media entre av1 e av2? */  
    let media=0;      
    media=(parseFloat(av1.value)+parseFloat(av2.value))/2;
    saida.innerHTML =`nome: ${nome.value}<br>`;
    saida.innerHTML +=`AV-1: ${av1.value}<br>`;
    saida.innerHTML +=`AV-2: ${av2.value}<br>`;

    saida.innerHTML +=`Media: ${media}<br>`;
}
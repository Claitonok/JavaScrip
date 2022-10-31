let i;
const saida=document.querySelector(".saida");
i=0; //valor inicial
while (i < 12) {//condição ou i<=12;
    saida.innerHTML+=i + " ";
    i++;//contador
}
saida.innerHTML+="<hr>";

let a;
a=3; //valor inicial
while (a >= 0) {//condição ou i<=12;
    saida.innerHTML+=a + " ";
    a--;//contador
}
saida.innerHTML+="<hr>";


let condição;
condição=0; //valor inicial
while (condição <= 10) {//condição ou i<=12;
    saida.innerHTML+=condição + " ";
    condição+=2;//contador
}
saida.innerHTML+="<hr>";

let contador;
contador=0; //valor inicial
while (contador <= 12) {//condição ou i<=12;
    saida.innerHTML+=contador + " ";
    contador+=4;//contador
}
saida.innerHTML+="<hr>";


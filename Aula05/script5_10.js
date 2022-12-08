let i;
const saida=document.querySelector(".saida");
for (i=0; i<6; i++) {
   saida.innerHTML+= i + " ";
}
saida.innerHTML+=`<hr>`;

let a;
const saida1=document.querySelector(".saida1");
for (a=1; a<=6; a++) {
   saida1.innerHTML+= a + `<h${a}>Titulo ${a}</h${a}>`;
} 
saida.innerHTML+=`<hr>`;

let c,tabuada;
tabuada=2;
const saida2=document.querySelector(".saida2");
for(c=0; c<=10; c++){
   saida2.innerHTML+= `${tabuada} x ${c} = ${tabuada * c}<br>`;
}
saida.innerHTML+=`<hr>`;

let C, signos;
const saida3=document.querySelector(".saida3");
for(C=9800; C<=9811; C++){
   saida3.innerHTML+= `${C} - &#${C}<br>`;
}

let I;
const saida4=document.querySelector(".saida4");
for(I=0; I<=2; I++){
   saida4.innerHTML +=`${I} - &#9776<br>`;

}
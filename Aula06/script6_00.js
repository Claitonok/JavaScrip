const saida=document.querySelector('.saida');
let i,j;
i=10;
i=20;
i=30;
j=[10,20,30,2]; //Array tipo ;
saida.innerHTML=j;


const saida1=document.querySelector('.saida1');
const uf = ["SP","RJ","MG","ES"];
const valores = ["SP",7.5,2021];

saida1.innerHTML=`${uf[1]} <br> ${valores[0]}`;


const saida2=document.querySelector('.saida2');

const lista = ["Arroz",7.5,2021];
const compras = ["Arroz","Feijoa","Carne","Leite","Miojo"];

compras[2] += " com Miojo";

saida2.innerHTML+=`${lista} <br>`;
saida2.innerHTML+=`${compras[0]} <br> `;
saida2.innerHTML+=`${compras[1]} <br> `;
saida2.innerHTML+=`${compras[2]} <br> `;
saida2.innerHTML+=`${compras[3]} <br> `;
saida2.innerHTML+=`${compras[4]} <br> `;
saida2.innerHTML+=  ` <hr> ` ;


const x=[2020,2,"Hoje"];
const saida3=document.querySelector('.saida3');

saida3.innerHTML=`x = ${x}<hr>`; //mostrar todos os valores

x[0]++;
x[1]=x[0]%2;
x[2]+=" em dia";

saida3.innerHTML+=`x[0] = ${x[0]}<br>`;
saida3.innerHTML+=`x[1] = ${x[1]}<br>`;
saida3.innerHTML+=`x[2] = ${x[2]}<br>`;
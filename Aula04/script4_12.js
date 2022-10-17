let a,b,c,d;
const saida1 = document.querySelector("#saida1");

a=50;
b=120;                   //Operador && (and)
c=200;

saida1.innerHTML = (`a = ${a}, b = ${b} <br>`);
d=(a<=b) && !(a>=c);//d=(V)&&(F)//d=F
saida1.innerHTML += ("(a<=b) && (a>=c) = "+d);

/*
d=(a<=b) && (a>=c);//F
d=(a<=b) && !(a>=c);//V
d=!(a<=b) && (a>=c);//F
d=!(a<=b) && !(a>=c);//F
d=!((a<=b) && (a>=c));//V
*/

/*
document.write(`a = ${a}, b = ${b}, c = ${c} <br>`);*/
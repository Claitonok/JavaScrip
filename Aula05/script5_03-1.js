let numero,calc;
const saida = document.querySelector(".saida");
num = parseInt(prompt("Digite um número"));

calc = num%2;
/*if(num%2 == 1){

}*/
if(calc==1){
    saida.innerHTML=`${num} - ÍMPAR`;
}
else{
    saida.innerHTML=`${num} - PAR`;
}
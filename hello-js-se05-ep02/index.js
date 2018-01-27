
a = prompt("Digite um número de 0 até 10:");

lerNumero(a);

function lerNumero(a){
if(a%2 ==0){
    console.log("PAR");
} else{
    console.log("ÍMPAR");
}
}
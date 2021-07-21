// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
var array = [];
var somma = 0;

for(var i = 0; i < 6; i++){
    array[i] = parseInt(prompt("Inserisci un numero "));
    console.log("Numero inserito " + array);
    if((i % 2) != 0){
        somma += array[i];
    }
}

console.log("Totale somma " + somma);
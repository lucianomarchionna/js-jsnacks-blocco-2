// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
var numero;
var numero_pari;

do{
    numero = parseInt(prompt("Inserisci un numero: "));
}while(isNaN(numero));


if((numero % 2) != 0){
    numero_pari = numero + 1;
    console.log("Il numero che hai inserito è " + numero + " era un numero dispari ma è stato incrementato per farlo diventare pari (" + numero_pari + ").");
}
else{
    console.log("Il numero che hai inserito è " + numero + " ed è un numero pari.");
}

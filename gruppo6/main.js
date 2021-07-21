// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

var nomi = ["Marco", "Paolo", "Giovanni" , "Luca", "Giuseppe" , "Ciro"];
var cognomi = ["Esposito", "Rossi", "Spinazzola" , "Chiesa", "Chiellini", "Insigne"];

for(var i = 0; i < 6; i++){
    var random_nomi = Math.floor(Math.random()*nomi.length);
    var random_cognomi = Math.floor(Math.random()*cognomi.length);
    console.log((nomi[random_nomi]) + (" ") + (cognomi[random_cognomi]));
}
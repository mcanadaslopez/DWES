'use strict';
console.log("Seguimos con Javascript");
var parrafos = document.getElementsByTagName("p");
console.log("Nº de parrafos en el documento: " + parrafos.length);
mostrar(parrafos);


function mostrar(...todos){
    console.log(todos);
}




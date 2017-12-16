'use strict'

var wzrostMateusz = 190;
var wzrostOlgi = 195;

/* Warunek if */

if(wzrostOlgi<wzrostMateusz){
    console.log("Olga jest niższa");
}

/* Warunek if else */

if(wzrostOlgi<wzrostMateusz){
    console.log("Olga jest niższa");
} else {
    console.log('Olga nie jest niższa');
}

/* Warunek if else if */

if(wzrostOlgi<wzrostMateusz){
    console.log("Olga jest niższa");
} else if(wzrostOlgi=wzrostMateusz){
    console.log('Olga tak wysoka jak Mateusz');
} else {
    console.log("Olga jest wyższa");
}

    
/* Warunek switch */

var kolor ='zielony';
switch(kolor){
        case'czerwony':
        console.log('kolor czerwony');
        break;
         case'zielony':
        console.log('zielony');
        break;
         case'czarny':
        console.log('kolor czarny');
        break;
    default:
        console.log('inny kolor');
}
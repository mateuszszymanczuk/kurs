'use strict';
/*petla for*/

/*1,2,3,4*/
for(var i = 1; i<5; ){
   console.log(i++);
}

console.log('-----------------');

/*2,3,4,5*/
for(var i = 1; i<5; ){
   console.log(++i);}

/* pętra for each */

var tablice=['Adama', 'Ewa', 'Kacper'];
tablice.forEach(function(element, index){
            console.log("Element z indexem " +index+" ma wartość "+ element)
});


/* Pętla while */

var it=10;
var flaga=true;
while(flaga){
    console.log(it);
    if(it < 5){
        flaga = false;
}
it--;
}

/* Pętla do while */

do {
    console.log('Pętla do...while')
    it--;
} while (it > 0);

/* Break */

var a =0;
while(a>10){
    console.log(++a);
    if(a == 5) {
        break;
    }
}

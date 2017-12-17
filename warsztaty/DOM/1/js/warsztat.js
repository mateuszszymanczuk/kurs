'use strict';

function ustawTlo (event){
    p1.style.backgroundColor='red';
    p2.style.backgroundColor='yellow';
    
}

function usunTlo (event){
    p1.style.backgroundColor='transparent';
    p2.style.backgroundColor='transparent';
}

var p1 = document.getElementsByTagName('p')[0];
console.log(p1);

var p2 = document.getElementsByTagName('p')[1];
console.log(p2);



var przycisk = document.getElementById('przycisk');
console.log(przycisk);


if (p1.style.backgroundColor != 'red') {
    przycisk.onclick = ustawTlo;
} else {
    przycisk.onclick = usunTlo;
}
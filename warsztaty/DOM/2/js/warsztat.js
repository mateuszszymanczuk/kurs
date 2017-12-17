'use strict'

//var imie = document.getElementsByName('fname')[0];
//console.log(imie.value);
//
//var nazwisko = document.getElementsByName('lname')[0];
//console.log(nazwisko.value);

function pobierzImie (event) {
    event.preventDefault();
    console.log(document.getElementsByName('fname')[0].value);
    console.log(document.getElementsByName('lname')[0].value);
}

//var przycisk = document.querySelectorAll('input')[2];
//console.log(przycisk);
//przycisk.onclick = 'pobierzImie';
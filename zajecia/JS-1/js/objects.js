'use strict';

var osoba = {
    imie: 'Marcin',
    wzrost: 180,
    przedstawSie: function(){
        console.log("Mam na imię " + this.imie + ", mam " + this.wzrost + "cm wzrostu.");
    }
}

console.log(osoba.imie);
osoba.przedstawSie();
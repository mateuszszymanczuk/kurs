'use strict';

var jsonOsoby = {
    "osoby": [
        {
            imie:'Krystian',
            nazwisko: 'dziopa',
            wzrost: 180,
            zainteresowania:[
            {
                nazwa:'podróże'
            },
            {
                nazwa:'gotowanie'
            }
        ]
    },
    



        {
            imie:'Jan',
            nazwisko: 'Kowalski',
            wzrost: 150,
            zainteresowania:[
            {
                nazwa:'piłka nożna'
            }
        ]
    },
    

        {
            imie:'Ewelina',
            nazwisko: 'Nowak',
            wzrost: 190,
            zainteresowania:[
            {
                nazwa:'szydełkowanie'
            },
            {
                nazwa:'gotowanie'
            }
        ]
      }
    ]
}
        

console.log(jsonOsoby);
jsonOsoby.osoby[0].zainteresowania.forEach(function(element, index){console.log(element.nazwa);
});

jsonOsoby.osoby.forEach(function(element, index){
    console.log("Imię to " + element.imie + " a wzrost to " + element.wzrost + " cm")
});
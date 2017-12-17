'use strict';

var istniejacyWezel = document.getElementById('parFirst').children[3];
console.log(istniejacyWezel);

var newElement = document.createElement('p'); //stwórz nowy element p

var newElementContent = document.createTextNode('To jest nowy paragraf'); //stworzenie nowego tekstu do paragrafu

newElement.appendChild(newElementContent); //dodaj tekst do elementu p

console.log(newElement);

istniejacyWezel.appendChild(newElement);
istniejacyWezel.removeChild(newElement);


var parFirstDiv = document.getElementById('parFirst');

parFirstDiv.replaceChild(newElement, istniejacyWezel);

var allLinks = document.querySelectorAll('a');
console.log(allLinks);

/*FOR*/
//for(var i = 0; i < allLinks.length; i++){
//    var br = document.createElement('br');
//    allLinks[i].removeAttribute('class');
//    allLinks[i].parentElement.insertBefore(br, allLinks[i].nextSibling);
//}
//    


/*For Each - trzeba liste, a do listy potrzebne querySelector*/

allLinks.forEach(function(element){
    var br = document.createElement('br');
    element.removeAttribute('class');
    element.parentElement.insertBefore(br, element.nextSibling);
    
});

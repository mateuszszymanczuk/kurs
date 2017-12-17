'use strict';

function alarm(event){
    event.preventDefault(); // zapobiegamy domyślnej akcji
    console.log('kliknieto w link');
    console.log(event.type);
}

var secondLink = document.getElementsByTagName('a')[1];
secondLink.onclick = alarm;

var thirdLink = document.getElementsByTagName('a') [2];
thirdLink.addEventListener('click', alarm);

//thirdLink.removeEventListener('click', alarm);

function klikHeader(){
    console.log('kliknales w header');
}

function klikH1(event){
    event.stopPropagation();
    console.log('Kliknieto w h1');
}

document.getElementsByTagName('header')[0].onclick = klikHeader;
document.getElementsByTagName('h1')[0].onclick = klikH1;
class Ogloszenia {
    constructor(tytul, cena, opis, kontakt, kategoria) {
        this.tytul = tytul;
        this.cena = cena;
        this.opis = opis;
        this.kontakt = kontakt;
        this.kategoria = kategoria;
    }
    
    zmienKontakt(tel){
        this.kontakt = tel;
    }
    
    wyswietlTytul(){
        console.log (this.tytul)
    }
}


var ogloszenie1 = new Ogloszenia("Mieszkanie na sprzedaż", 300000, "Dwa pokoje z kuchnią, bez dzikich lokatorów","50522569","nieruchomosc");

var ogloszenie2 = new Ogloszenia("Sprzedam Opla", 400000,"Trzyletni, bezwypadkowy, pierwszy wlasiciel","5555555","Motoryzacja");

console.log(ogloszenie1);
console.log(ogloszenie2);

ogloszenie1.zmienKontakt("123");
console.log(ogloszenie1);
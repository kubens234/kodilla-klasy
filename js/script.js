function Telefon(marka, model, cena, kolor) {
	this.marka = marka;
	this.model = model; 
	this.cena = cena;
	this.kolor = kolor;
}

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + " model " + this.model + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
	document.write("Marka telefonu to " + this.marka + " model " + this.model + ", kolor to " + this.kolor + ", a cena to " + this.cena + "." + "<br >");
}

var iPhone6S = new Telefon("Apple", "iPhone6S", 2250, "srebrny");
var SamsungGalaxyS6 = new Telefon("Samsung", "Samsung Galaxy S6", 1800, "czarny");
var OnePlusOne = new Telefon("OnePlus", "One", 700, "biały");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();
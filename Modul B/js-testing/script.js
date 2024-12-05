//console.log("Hello World!");

//let og const som nøkkelord for å opprette variabler
//const forNavn = "John";
//const alder = 18;
//const dato = "01/01/1900"

// Det er forskjell på å skrive ut verdien av en variabel og 
// en tekst.
// console.log("Fornavn");
// console.log(forNavn);

// forNavn = "Per";

// Datatyper:
// string = tekst
// number = tall - Javascript bruker dette!!!!
// integer/int = heltall
// float = desimaltall
// bool / boolean = true / false
// bit = 0 / 1
// byte = 8 bit
// date = dato

// console.log(typeof forNavn + " - forNavn");
// console.log(forNavn);
// console.log(typeof alder + " - alder")
// console.log(alder);
// console.log(typeof dato);

// Aritmetiske Operatorer:
// ------------------------------------------------------------
// PEMDAS -> Rekkefølge for matematiske kalkulasjoner.
//
// + - * / ** er operatorer.
//
//Brøk skrives som vanlig deling.
//     1
//    ----
//     4     = 1/4
//
// = Tilordningsoperator
//
// Shorthand operators:
// += -= /= *=  Eks: alder += 1; -> alder = alder + 1;
// varNavn++ eller varNavn-- -> Øker eller minker variabelen med 1. 
//                              etter at uttrykket er beregnet. Syntax: alder++;
//                              Postfix: Post = Etter
//
// ++varNavn eller --varNavn -> Øker eller minker variabelen med 1 før 
//                              resten av uttrykket blir beregnet. Syntax: --alder;
//                              Prefix: Pre = Før

// let navn = "John";
// let alder = 17; //deklarasjon og initialisering
// let alder2; //deklarasjon

// let sumAlder = 0;
// alder2 = 4 ** 2; //Andre språk bruker ^ istedet for **
// sumAlder = alder / alder2;
// alder = alder + alder;
// alder += alder; //En hurtigere måte å skrive linjen ovenfor på.
// alder2 = alder2 / 0;

// console.log(alder);
// console.log(alder + 1);
// console.log(alder2);
// console.log(sumAlder);

// Sammenlignings operatorer:
//----------------------------------------------
// ==  -> Sammenligner verdier uavhengig av datatype 
// === -> Sammenligner verdier og datatype.... BRUK DENNE!!!!!

let tall = 1;
let sann = false;
let usann = false;

// Conditionals:
// ---------------------------------------------
// if (uttrykk) {
//
// }
//
// uttrykk må kunne evalueres som sann/usann (eng: true/false)

if (tall === "1"){ //kode som kommer mellom {} er inne i en kode blokk
    console.log("Dette var sant")
    console.log(tall);
    tall = tall + 1;
}
/* 
// Visual Basic Syntax:
if tall = 1 Then 
    debug.print("Dette var sant")
    debug.print(tall)
    tall = tall + 1
end if

// Python syntax:
if tall==1:
    print("Dette var sant")
    print(tall)
    tall = tall + 1
*/

let day;
switch (new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}

const date = new Date()
const appendText = (date = 1) => {
   let suffix = "th";
   if (date == 0) suffix = "";
   if (date % 10 == 1 && date % 100 != 11) suffix = "st";
   if (date % 10 == 2 && date % 100 != 12) suffix = "nd";
   if (date % 10 == 3 && date % 100 != 13) suffix = "rd";

   return date + suffix;
};

const months = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];

const month = new Date()
console.log("Today is: " + day + " the " + appendText(date.getDate()) + " of " + months[month.getMonth()])

document.getElementById("date").innerHTML = "Today is: " + day + " the " + appendText(date.getDate()) + " of " + months[month.getMonth()]

let frukter = ["Eple", "Banan", "Appelsin", "Drue", "Pære"]

console.log(typeof frukter);

let frukt = frukter[3];

console.log(frukter);
console.log(frukter[0]);
console.log("Variabelen frukt = " + frukt);
let year = 2024;
if (year % 4 === 0){
    console.log("året er skuddår")
} else {
    console.log("Året er ikke skuddår")
}
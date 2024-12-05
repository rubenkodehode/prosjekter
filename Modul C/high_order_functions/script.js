function number(array, callback){
    return array.map(callback);
}

const numbers = [1,2,3,4,5];
const double = number(numbers, num => num * 2);
console.log(double);
const addOne = number(numbers, num => num + 5);
console.log(addOne);



const fruits = ['pear', 'orange', 'melon', 'mango', 'kiwi', 'apple', 'tomato'];
const sorted = fruits.sort((a, b) => a.length - b.length);
console.log(sorted);

const whatEver = frukter.sort().map().filter()
// oppgave: chain disse tre metodene
// 1: sort skal sortere listen etter bokstav nr 3 (index 2)
// 2: map skal legge til ! bakerst på alle elementene
// 3: filter skal filtrere listen, der kun frukter som starter på m blir med
// rekkefølge på chaining er valgfri. HUSK at kommandoene kjøres fra venstre til høyre
function CelsiusToFahrenheit(c){
    return console.log("The temperature is " + ((c * 9.0/5.0) + 32.0) + "°F");
}
const c = 25;

function FahrenheitToCelsius(f){
    return console.log("The Temperature is " + ((f - 32.0) * 5.0/9.0) + "°C");
}
const f = 77;

// function AddTwoNumbers(a, b){
//     return console.log(a + " + " + b + " = " + (a + b))
// }
function AddTwoNumbers(a, b){
    let answer;
    answer = sum(a, b);
    console.log(answer)
}

function sum(a, b){
    return a+b;
}
const a = 20;
const b = 10;

function FindLargestNumbers(num1, num2){
    return num1 >= num2 ? num1 : num2;
}

function printLargestNumber(num1, num2){
    console.log(FindLargestNumbers(num1, num2));
}
const num1 = 10;
const num2 = 20;

function findSmallestNumber(x, y, z){
    if (FindLargestNumbers(x, y) === x){
        if (FindLargestNumbers(y, z) === y){
            return z;
        } else {
            return y;
        }
    } else if (FindLargestNumbers(x, z) === x){
        return z
    } else{
        return x
    }
}

function printSmallestNumber(x, y, z){
    console.log(findSmallestNumber(x, y, z));
}

const x = 17;
const y = 7;
const z = 1;

let i = 1;
let text = "";
while(i <= 10){
    console.log(i); i++;
}
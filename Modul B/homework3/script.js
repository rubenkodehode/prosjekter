// task 1: name and addition function
let name = "Ruben"
function addition(num1, num2){
    return num1 + num2
}
let num1 = 13
let num2 = 20
let sum = addition(num1, num2);
console.log("task 1:")
console.log(`my name is ${name}`);
console.log(`${num1} + ${num2} = ${sum}`);
console.log("")

// task 2: my current age
function myAge(){
    const d = new Date();
    let year = d.getFullYear();
    let birth = 1999;
    return year - birth;
}
console.log("task 2:")
console.log(`I am ${myAge()} years old`);
console.log("")

// task 3: checking if number is zero, positive, or negative
function numCheck(num){
    if(num < 0){
        return `${num} is negative`
    } else if(num > 0){
        return `${num} is positive`
    } else if(num == 0){
        return `${num} is 0`
    } else{
        return "please type a number."
    }
}
console.log("task 3:")
console.log(numCheck(3));
console.log(numCheck(-1));
console.log(numCheck(0));
console.log(numCheck("a"));

// task 4: for-loop
console.log("");
console.log("task 4:")
let res = 20;
let count = 1
for(let i = count; i <= res; i++){
    console.log(i);
}

function evenSum(){
    let sum = 0
    let hundred = 100;
    for(let i = 1; i <= hundred; i++){
        if(i % 2 == 0){
            sum = sum + i; 
        }
    }
    return sum;
}
console.log(evenSum());
console.log("");

// task 5: string manupilation
function stringReverse(str) {
    let strRev = "";
    for (let i = str.length - 1; i >= 0; i--) {
      strRev += str[i];
    }
    console.log(strRev);
  }
console.log("task 5")
stringReverse("is this backwards yet?");

function swapLetters(text){
        if(text.length < 7){
            console.log("your text is too short")
        } else{
            let chars = text.split("");
            // console.log(chars);
            let letter1 = chars[2];
            let letter2 = chars[4];
            let letter3 = chars[6];
            chars[2] = letter2;
            chars[4] = letter3;
            chars[6] = letter1;
            return chars.join("");
        }
    
    }
console.log(`example, but swapped some letters: 
${swapLetters("example")}`);
console.log("")

// task 6: array manupilation
function middle(arr){
    let result = [];
    let n = arr.length;

    arr.sort();

    // checking the length of the array
    if(n % 2 === 0){
        // if even, append the middle elements to the result
        result.push(arr[n / 2 - 1]);
        result.push(arr[n / 2])
    } else{
        // if odd, append the element to the result
        result.push(arr[Math.floor(n / 2)])
    }
    return result;
}
let arr = [3, 4, 6, 8, 9, 5, 2];
let middles = middle(arr);

console.log("task 6:")
console.log(`Middle element(s): ${middles.join(" and ")}`)

function uniqueNumber(array){
    const uniqueArr = [];

    for(let i = 0; i < array.length; i++){
        if(uniqueArr.indexOf(array[i]) === -1){
            uniqueArr.push(array[i]);
        }
    }
    return uniqueArr
}
const arr1 = [1,1,1,2,2,3,3,3,4,4,5,5];
uniqueArr = uniqueNumber(arr1);
console.log(`array before filter: ${arr1}`);
console.log(`array after filter: ${uniqueArr}`);

// task 7: selection structures
console.log("");
console.log("task 7:")
function isLeapYear(year){
    if(year % 100 === 0 ? year % 400 === 0 : year % 4 === 0){
        console.log(`Input year: ${year}, is a leap year`);
    } else{
        console.log(`Input year: ${year}, is NOT a leap year`);
    }
}
let inputYear = 2024;
isLeapYear(inputYear);
inputYear = 2025;
isLeapYear(inputYear);

// this code section was helped a bit with AI. I wrote the code myself
function translateDirections(input){
    const directionMap = {
        "<" : "West",
        ">" : "East",
        "v" : "South",
        "^" : "North"
    };
    return input.split("").map(char => directionMap[char]);
}

console.log("directions: < > v ^ =");
console.log(translateDirections("<>v^"));

// task 8
console.log("");
console.log("task 8:");
function factorize(number){
    let factors = [];
    for(let i = 2; i <= Math.sqrt(number); i++){
        while(number % i === 0){
            factors.push(i);
            number /= i
        }
    }
    if(number > 1){
        factors.push(number)
    }
    return factors
}
const number = 12;
const primeNumber = factorize(number);
console.log(`Prime factors of ${number}: ${primeNumber}`);

// task 9
console.log("");
console.log("task 9:")
function calculateAge(birthDate){
    const today = new Date();
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();

    let years = today.getFullYear() - birthYear;
    let months = today.getMonth() - birthMonth;
    let days = today.getDate() - birthDay;

    if(months < 0){
        years -= 1;
        months += 12;
    }

    if(days < 0){
        months -= 1;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate()
    }
    return `You are ${years} years, ${months} months, and ${days} days old.`
}

const birthDate = new Date("1999-08-13");
const ageString = calculateAge(birthDate);
console.log(ageString);
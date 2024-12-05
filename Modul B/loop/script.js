let hundred = 100;
let sum = 0;
for (i = 0; i <= hundred; i++) {
  sum = sum + i;
}
console.log("task 1:");
console.log(`sum of first ${hundred} natural number is: `, sum);
console.log("task 2:");
let number = 5;
for (i = 5; i <= 50; i += 5) {
  console.log(i);
}

var string = "Hello, world!";
var count = 0;
for (i = 0; i < string.length; i++) {
  count++;
}
console.log("task 3:");
console.log(count);

function largestElement(arr) {
  let largestNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}
const num1 = [50, 46, 78, 30, 1];
console.log("task 4:");
console.log(largestElement(num1));

function stringReverse(str) {
  let strRev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strRev += str[i];
  }
  console.log(strRev);
}
console.log("task 5:");
stringReverse("Hello");
stringReverse("this is a very long string to test if the function works");

console.log("task 6:");
for (let i = 0; i <= 20; i++) {
  if (i != 10) {
    console.log(i);
  }
}

let sum2 = 0;
for (i = 0; i <= 50; i++) {
  if (i % 2 == 0) {
    sum2 = sum2 + i;
  }
}
console.log("task 7:");
console.log(`sum of all even numbers from 1 to 50 is ${sum2}`);

console.log("task 8:");
let star = "*";
for (i = 1; i <= 4; i++) {
  console.log(star.repeat(i));
}

console.log("task 9:");
function diamond(n) {
  for (let i = 1; i <= n; i++) {
    let str = "*";
    let space = " ";
    console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
  }
  for (let i = n - 1; i >= 1; i--) {
    let str = "*";
    let space = " ";
    console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
  }
}
diamond(5);
diamond(10);

let words = "I am not gonna live forever, but I wanna live while I am alive";

const findDuplicates = (words) => {
  const strArr = words.split(" ");
  const res = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])) {
      if (!res.includes(strArr[i])) {
        res.push(strArr[i]);
      }
    }
  }
  return res.join(" ");
};
console.log("task 10:");
console.log(findDuplicates(words));

let a = 10;
let b = 20;
let temp;

for (let i = 0; i < 1; i++) {
  temp = a;
  a = b;
  b = temp;
}
console.log("task 11:");
console.log(`a = ${a}`);
console.log(`b = ${b}`);

function fibonacci(num) {
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  for (let i = 1; i <= num; i++) {
    console.log(`${n1}`);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}
console.log("task 12:");
fibonacci(10);

function checkPrime(numb) {
  let res = true;
  if (numb <= 1) {
    res = false;
  }

  for (let i = 2; i * i <= numb; i++) {
    if (numb % i === 0) {
      res = false;
      break;
    }
  }
  if (res) {
    console.log(`${numb} is a prime number`);
  } else {
    console.log(`${numb} is not a prime number`);
  }
}
console.log("task 13:");
checkPrime(13);
checkPrime(8);

var input = [2, 3, 8, 1, 4, 5, 9, 6, 7];

var output = [];
var inserted;

for (var i = 0, ii = input.length; i < ii; i++) {
  inserted = false;
  for (var j = 0, jj = output.length; j < jj; j++) {
    if (input[i] < output[j]) {
      inserted = true;
      output.splice(j, 0, input[i]);
      break;
    }
  }
  if (!inserted) {
    output.push(input[i]);
  }
}
console.log("task 14:");
console.log(`unsorted: ${input}`);
console.log(`sorted: ${output}`);


function isPalindrome(n){
  return String(n) === String(n).split('').reverse().join('');
}

function largestPalindromeOptimized(arr){
  let largestPalindromeNumber = 0;
  for(let i = 0; i < arr.length; i++){
    if(isPalindrome(arr[i]) && arr[i] > largestPalindromeNumber){
      largestPalindromeNumber = arr[i];
      for( let j = i + 1; j < arr.length; j++){
        if(arr[j] > largestPalindromeNumber && String(arr[j]).length > String(largestPalindromeNumber).length){
          break;
        }
      }
    }
  }
  return largestPalindromeNumber;
}

const arr = [1, 232, 54545, 65326, 70807, 9999991]
console.log("task 15:")
console.log(`input array: ${arr}`);
console.log(`largest palindrome is: ${largestPalindromeOptimized(arr)}`);

// setInterval()

// const intervalID = setInterval(() => {
//   console.log("dette kjører hvert sekund");
// }, 1000);
// console.log(intervalID);

// clearInterval(intervalID);

// setTimeout() - funksjon som kjører noe på angitt tird men kun en gang
// setTimeout(() => {
//   console.log("dette kjører en gang etter angitt tid");
// }, 3000);

// destructuring
// const numbers = [1, 2, 3, 4, 5, 6];

// let number = numbers[0];
// let number2 = numbers[1];
// let number3 = numbers[2];
// let number4 = numbers[3];
// let number5 = numbers[4];
// let number6 = numbers[5];

// // console.log(number, number2, number3, number4, number5, number6);
// // en linje kode for å hente ut og opprette variabler fra en liste
// const [firstNumber, secondNumber, thirdNumber, ...otherNumbers] = numbers;
// const [, , , num3, ...otherNum] = numbers;
// // console.log(firstNumber, secondNumber, thirdNumber);
// // console.log(otherNumbers);
// // console.log(num3, otherNum);

// // destructuring a function that returns an array
// function colors() {
//   return ["blue", "red", "green", "yellow"];
// }

// const [color1, color2, ...rest] = colors();
// console.log(color1, color2, rest);

// Destructuring a matrix
const matrix = [
  [1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31, 32],
];

console.log(matrix[2][4]);

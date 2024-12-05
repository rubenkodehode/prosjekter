let mat = ["pizza", "fisk", "pasta", "taco"];

console.log(typeof mat);

function printMat(matretter, numb){
    console.log("Før endring er numb = " + numb);
    numb = 5;
    matretter[1] = "burger"

    console.log(matretter[1]);
    console.log("Numb = " + numb);
}

tall = 1;
printMat(mat, tall)
console.log("tall = " + tall)
console.log(mat[1]);
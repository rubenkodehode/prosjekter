function makeSquares(){
    const nbOfSquares = document.getElementById("input").value;

    
    // alert(nbOfSquares);

    if(nbOfSquares < 1 || nbOfSquares > 500){
        alert("number must be from 1 to 500");
    } else {
       const allSquares = document.getElementsByClassName("squareContainer");
        for(let oneSquare of allSquares){
            oneSquare.remove();
        }

        const squareCont = document.createElement("div");
        squareCont.classList.add("squareContainer");
        document.body.append(squareCont);
        
        let hexString = "0123456789abcdef";

        let randomColor = () => {
            let hexcode = "#";
            for(i = 0; i < 6; i++){
                hexcode += hexString[Math.floor(Math.random() * hexString.length)];
            }
            return hexcode;
        }

        for(let i = 0; i < nbOfSquares; i++){
            const square = document.createElement("div");
            square.classList.add("square");
            const colorOne = randomColor();
            const colorTwo = randomColor();
            const angle = Math.floor(Math.random() * 360);
            
            square.style.background = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
            square.textContent = i + 1;
            square.addEventListener('click', () => {
                console.log("test");
                if(square.classList.contains('spin')){
                    console.log("1");
                    square.classList.remove('spin');
                } else {
                    console.log("2");
                    square.classList.add('spin');
                }
            });
            squareCont.append(square);
        }
    }
}   
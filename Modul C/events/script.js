// const button = document.querySelector('#myButton');
// const para = document.querySelector('#myParagraph');
const sqr = document.querySelector('#myDiv');
// const coords = document.querySelector('#coords');
// let counter = 0;
 let sqrLeftPosition = 0;
 let sqrUpPosition = 0;

// button.addEventListener("click", () => para.textContent = ++counter)

// // console.log(para)
// para.textContent = counter;

// sqr.addEventListener("mouseenter", () => sqr.style.backgroundColor = 'red');
// sqr.addEventListener('mouseleave', () => sqr.style.backgroundColor = 'blue');
// sqr.addEventListener('click', () => {
//     sqr.style.backgroundColor = 'orange';
//     sqrLeftPosition += 10;
//     sqr.style.left = sqrLeftPosition + 'px'
// });
// sqr.addEventListener('dblclick', () => sqr.style.backgroundColor = 'green');

// document.body.addEventListener('click', (event) => {
//     console.log(event);
//     coords.textContent = `X:${event.x} Y:${event.y}`
// })

window.addEventListener('keydown', (e) =>{
    console.log(e);
    if(e.key === "ArrowLeft"){
        console.log("left")
        sqrLeftPosition -= 10;
        sqr.style.left = sqrLeftPosition + 'px';
    } else if(e.key === "ArrowRight"){
        console.log("right")
        sqrLeftPosition += 10;
        sqr.style.left = sqrLeftPosition + 'px';
    } else if(e.key === "ArrowUp"){
        console.log("up");
        sqrUpPosition -= 10;
        sqr.style.top = sqrUpPosition + 'px';
    } else if(e.key === "ArrowDown"){
        console.log("down");
        sqrUpPosition += 10;
        sqr.style.top = sqrUpPosition + 'px';
    }
})
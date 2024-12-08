const box = document.getElementById("box");

let positionX = 100;
let positionY = 100;

document.addEventListener("keydown", (e) => {
  const step = 30;

  if (e.key === "w") {
    positionY -= step;
  } else if (e.key === "s") {
    positionY += step;
  } else if (e.key === "a") {
    positionX -= step;
  } else if (e.key === "d") {
    positionX += step;
  }

  box.style.top = `${positionY}px`;
  box.style.left = `${positionX}px`;
});

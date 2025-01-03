const calendar = document.getElementById("calendar");
const popup = document.getElementById("popup");
const resetButton = document.getElementById("resetButton");
const addMessageButton = document.getElementById("addMessageButton");

for (let i = 1; i <= 25; i++) {
  const dayDiv = document.createElement("div");

  if (i <= 24) {
    dayDiv.innerHTML = `<span>${i}</span>`;
    dayDiv.dataset.day = i;
  } else {
    dayDiv.classList.add("empty");
  }

  calendar.appendChild(dayDiv);
}

const openedDays = new Set();
const customMessages = {};

calendar.addEventListener("click", async (event) => {
  const target = event.target.closest("div");

  if (target && target.dataset.day && !openedDays.has(target.dataset.day)) {
    const day = target.dataset.day;
    openedDays.add(day);
    target.classList.add("opened");

    if (customMessages[day]) {
      popup.textContent = `Luke ${day}: ${customMessages[day]}`;
      popup.style.display = "block";
      return;
    }

    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist&type=single"
      );
      const data = await response.json();

      const content = data.joke || "Merry Christmas!";

      popup.textContent = `Door ${day}: ${content}`;
      popup.style.display = "block";
    } catch (error) {
      popup.textContent = "Could not fetch data. Try again later!";
      popup.style.display = "block";
    }
  } else if (target && openedDays.has(target.dataset.day)) {
    popup.textContent = `Door ${target.dataset.day} has already been opened!`;
    popup.style.display = "block";
  }
});

resetButton.addEventListener("click", () => {
  openedDays.clear();
  for (const key in customMessages) {
    delete customMessages[key];
  }
  document.querySelectorAll(".calendar div").forEach((div) => {
    div.classList.remove("opened");
  });
  popup.style.display = "none";
});

addMessageButton.addEventListener("click", () => {
  const day = prompt("Which day do you want to add a message on? (1-24)");
  if (day >= 1 && day <= 24) {
    const message = prompt("Write down your Christmas message:");
    if (message) {
      customMessages[day] = message;
      alert(`Message for day ${day} is added.`);
    }
  } else {
    alert("Invalid day. Please choose a day between 1 and 24.");
  }
});

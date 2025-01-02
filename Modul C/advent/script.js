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

      const content = data.joke || "God jul!";

      popup.textContent = `Luke ${day}: ${content}`;
      popup.style.display = "block";
    } catch (error) {
      popup.textContent = "Kunne ikke hente data. Prøv igjen senere!";
      popup.style.display = "block";
    }
  } else if (target && openedDays.has(target.dataset.day)) {
    popup.textContent = `Luke ${target.dataset.day} er allerede åpnet!`;
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
  const day = prompt("Hvilken dato vil du legge til en melding for? (1-24)");
  if (day >= 1 && day <= 24) {
    const message = prompt("Skriv inn din julemelding:");
    if (message) {
      customMessages[day] = message;
      alert(`Melding for dag ${day} er lagt til.`);
    }
  } else {
    alert("Ugyldig dato. Vennligst velg en dato mellom 1 og 24.");
  }
});

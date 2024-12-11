document.addEventListener("DOMContentLoaded", () => {
  // Define the sound configuration with names, keys, and image paths
  const sounds = [
    { soundName: "clap", key: "Q", image: "./images/clap.png" },
    { soundName: "hihat", key: "W", image: "./images/hihat.jpeg" },
    { soundName: "kick", key: "E", image: "./images/kick.jpg" },
    { soundName: "openhat", key: "A", image: "./images/openhat.jpg" },
    { soundName: "ride", key: "S", image: "./images/ride.jpg" },
    { soundName: "snare", key: "D", image: "./images/snare.jpg" },
    { soundName: "tink", key: "Z", image: "./images/tink.jpg" },
    { soundName: "tom", key: "X", image: "./images/tom.jpg" },
  ];

  const drumButtonsContainer = document.querySelector(".drum-buttons");

  // Generate buttons dynamically based on the sounds array
  sounds.forEach(({ soundName, key, image }) => {
    const button = document.createElement("button");
    button.setAttribute("data-sound-name", soundName); // Custom attribute for the sound name
    button.setAttribute("data-key", key); // Custom attribute for the keyboard shortcut

    // Add the image to the button
    const img = document.createElement("img");
    img.src = image;
    img.alt = soundName;

    // Add a label to display the keyboard shortcut
    const label = document.createElement("span");
    label.textContent = `(${key})`;

    // Append the image and label to the button
    button.appendChild(img);
    button.appendChild(label);

    drumButtonsContainer.appendChild(button);
  });

  // Play sound function
  const playSound = (soundName) => {
    const audio = new Audio(`./sounds/${soundName}.wav`);
    audio.currentTime = 0; // Reset sound to start
    audio.play();
  };

  // Add click listeners to buttons
  document.querySelectorAll(".drum-buttons button").forEach((button) => {
    const sound = button.getAttribute("data-sound-name"); // Access the custom sound name attribute
    button.addEventListener("click", () => playSound(sound));
  });

  // Add keyboard listeners
  document.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();
    const button = document.querySelector(`button[data-key="${key}"]`);
    if (button) {
      playSound(button.getAttribute("data-sound-name")); // Access the sound name attribute
      button.classList.add("active");
      setTimeout(() => button.classList.remove("active"), 100);
    }
  });
});

class Controls {
  constructor() {
    this.keysPressed = {};

    // Listen for keydown and keyup events
    document.addEventListener("keydown", (e) => {
      this.keysPressed[e.key] = true;
    });

    document.addEventListener("keyup", (e) => {
      this.keysPressed[e.key] = false;
    });
  }

  isKeyPressed(key) {
    return !!this.keysPressed[key];
  }
}

export default Controls;

class Paddle {
  constructor(paddleElement, upKey, downKey, controls, boundaryHeight) {
    // if (!paddleElement) {
    //   throw new Error("paddle is null. pls fix");
    // }
    this.paddle = paddleElement;
    this.upKey = upKey;
    this.downKey = downKey;
    this.controls = controls;
    this.boundaryHeight = boundaryHeight;

    if (!this.paddle.style.top) {
      this.paddle.style.top = "150px";
    }
    this.paddleY = parseInt(this.paddle.style.top) || 150;
    this.paddleSpeed = 10;
  }

  updatePosition() {
    if (this.controls.isKeyPressed(this.upKey) && this.paddleY > 0) {
      this.paddleY -= this.paddleSpeed;
    }
    if (
      this.controls.isKeyPressed(this.downKey) &&
      this.paddleY < this.boundaryHeight - this.paddle.offsetHeight
    ) {
      this.paddleY += this.paddleSpeed;
    }
    this.paddle.style.top = this.paddleY + "px";
  }
}

export default Paddle;

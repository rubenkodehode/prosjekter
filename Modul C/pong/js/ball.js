class Ball {
  constructor(
    BallElement,
    gameWidth,
    gameHeight,
    resetCallback,
    updateScoreCallback
  ) {
    this.ball = BallElement;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.resetCallback = resetCallback;
    this.updateScoreCallback = updateScoreCallback;
    this.ballX = parseInt(this.ball.style.left) || 392.5;
    this.ballY = parseInt(this.ball.style.top) || 192.5;
    this.ballSpeedX = 3;
    this.ballSpeedY = 3;
  }

  moveBall(paddle1Y, paddle2Y, paddleHeight) {
    this.ballX += this.ballSpeedX;
    this.ballY += this.ballSpeedY;

    if (
      this.ballY <= 0 ||
      this.ballY >= this.gameHeight - this.ball.offsetHeight
    ) {
      this.ballSpeedY *= -1;
    }

    if (
      (this.ballX <= 20 &&
        this.ballY >= paddle1Y &&
        this.ballY <= paddle1Y + paddleHeight) ||
      (this.ballX >= this.gameWidth - 30 &&
        this.ballY >= paddle2Y &&
        this.ballY <= paddle2Y + paddleHeight)
    ) {
      this.ballSpeedX *= -1;
    }

    if (this.ballX < 0 || this.ballX > this.gameWidth - this.ball.offsetWidth) {
      const scorer = this.ballX < 0 ? 2 : 1;
      this.updateScoreCallback(scorer);
      this.resetCallback();
    }

    this.ball.style.left = this.ballX + "px";
    this.ball.style.top = this.ballY + "px";
  }

  resetPosition() {
    this.ballX = this.gameWidth / 2 - this.ball.offsetWidth / 2;
    this.ballY = this.gameHeight / 2 - this.ball.offsetHeight / 2;
    this.ballSpeedX *= -1;
  }
}

export default Ball;

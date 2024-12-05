// Select the canvas element and set up the 2D drawing context
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Set the background color of the canvas to black
canvas.style.background = "black";

// Variables to control ball direction, paddle positions, and game state
let dirX = true; // Ball moving right (true) or left (false)
let dirY = true; // Ball moving down (true) or up (false)
let Pad1YPos, Pad2YPos; // Paddle 1 and Paddle 2 vertical positions
let WKeyState = false,
  SKeyState = false; // Paddle 1 key states (W and S)
let OKeyState = false,
  LKeyState = false; // Paddle 2 key states (Up and Down arrow keys)
let Score1 = 0,
  Score2 = 0; // Player scores
let RequestFrame = false; // Whether the animation frame is active
let ballAnimation = 0; // Placeholder for ball animation logic (not used here)

// Event listeners for key presses (keydown and keyup)
document.addEventListener("keydown", (e) => {
  // Detect key presses and update paddle movement states
  if (e.key == "w") WKeyState = true;
  if (e.key == "s") SKeyState = true;
  if (e.key == "ArrowUp") OKeyState = true;
  if (e.key == "ArrowDown") LKeyState = true;

  // Start the game when "Enter" is pressed
  if (e.key == "Enter") {
    if (!RequestFrame) {
      const ball = new Obj(DocWidth / 2, DocHeight / 2, 10); // Create the ball object
      ball.drawBall(); // Draw the ball at its initial position
      RequestFrame = true; // Mark animation as active
      MoveBallLoop(ball); // Start the game loop
    }
  }
});
document.addEventListener("keyup", (e) => {
  // detect key releases and update paddle movement states
  if (e.key == "w") WKeyState = false;
  if (e.key == "s") SKeyState = false;
  if (e.key == "ArrowUp") OKeyState = false;
  if (e.key == "ArrowDown") LKeyState = false;
});

// define the Obj class to represent the ball and paddles
class Obj {
  constructor(x, y, radius, height) {
    this.color = "white"; // Color of the object
    this.x = x; // X-coordinate
    this.y = y; // Y-coordinate
    this.radius = radius; // Radius for ball or width for paddle
    this.height = height; // Height for paddle
    this.speed = 8; // Speed of ball movement
  }

  // Draw the ball
  drawBall() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  // Draw the paddles
  drawPad() {
    ctx.fillRect(this.x, this.y, this.radius, this.height);
    ctx.fillStyle = this.color;
  }

  // Handle the ball movement
  moveBall() {
    if (dirY) this.y += this.speed; // Move down
    if (dirX) this.x += this.speed; // Move right
    if (!dirY) this.y -= this.speed; // Move up
    if (!dirX) this.x -= this.speed; // Move left

    if (this.y > DocHeight) dirY = false; // Checks for collision with bottom wall
    // checks if the ball hits the right wall
    if (this.x > DocWidth) {
      dirX = GenerateRandomDir();
      dirY = GenerateRandomDir();
      this.y = DocHeight / 2;
      this.x = DocWidth / 2;
      Score1++;
      RequestFrame = false;
      ctx.clearRect(0, 0, DocWidth + 100, DocHeight);
      DrawPads(Pad1YPos, Pad2YPos);
      ctx.fillRect(DocWidth / 2 - 5, 0, 10, DocHeight);
      ctx.fillStyle = "white";
      ctx.fill();
      this.drawBall();
    }
    if (this.y < 0) dirY = true; // Checks for collision with top wall
    // Checks if the ball hits the left wall
    if (this.x < 0) {
      dirX = GenerateRandomDir();
      dirY = GenerateRandomDir();
      this.y = DocHeight / 2;
      this.x = DocWidth / 2;
      Score2++;
      RequestFrame = false;
      ctx.clearRect(0, 0, DocWidth + 100, DocHeight);
      DrawPads(Pad1YPos, Pad2YPos);
      ctx.fillRect(DocWidth / 2 - 5, 0, 10, DocHeight);
      ctx.fillStyle = "white";
      ctx.fill();
      this.drawBall();
    }
    // clear canvas, redraw paddles and the ball
    ctx.clearRect(0, 0, DocWidth + 100, DocHeight);
    DrawPads(Pad1YPos, Pad2YPos);
    ctx.fillRect(DocWidth / 2 - 5, 0, 10, DocHeight); // Draw centerline
    ctx.fillStyle = "white";
    ctx.fill();
    this.drawBall();

    checkCollision(this.y, this.x); // Check collision with paddles
    // update the score on the screen
    document.querySelector("#Player1").innerHTML = Score1;
    document.querySelector("#Player2").innerHTML = Score2;
  }
}

// setup the canvas and initial game state
function canvasSetup() {
  DocHeight = window.innerHeight;
  DocWidth = window.innerWidth;
  Pad2YPos = DocHeight / 2; // center paddles vertically
  Pad1YPos = DocHeight / 2;
  canvas.height = DocHeight;
  canvas.width = DocWidth;
  // Randomize initial ball direction
  dirX = GenerateRandomDir();
  dirY = GenerateRandomDir();
  // Draw the initial paddles and ball
  DrawPads(Pad1YPos, Pad2YPos);
  const ball = new Obj(DocWidth / 2, DocHeight / 2, 10);
  ball.drawBall();
  ctx.fillRect(DocWidth / 2 - 5, 0, 10, DocHeight); //center line
  ctx.fillStyle = "white";
  ctx.fill();
}
// Draw the paddles
function DrawPads(Pad1YPos, Pad2YPos) {
  const Pad1 = new Obj(50, Pad1YPos, 25, 100); // Paddle 1
  const Pad2 = new Obj(DocWidth - 50, Pad2YPos, 25, 100); // Paddle 2

  Pad1.drawPad();
  Pad2.drawPad();
}
// Start the game loop when canvas is clicked
canvas.onclick = () => {
  if (!RequestFrame) {
    const ball = new Obj(DocWidth / 2, DocHeight / 2, 10);
    ball.drawBall();
    RequestFrame = true;
    MoveBallLoop(ball);
  }
};

// The main game loop to move the ball and paddles
function MoveBallLoop(ball) {
  // Update paddle positions based on key states
  if (WKeyState && Pad1YPos > 0) Pad1YPos -= 10;
  if (SKeyState && Pad1YPos < window.innerHeight - 100) Pad1YPos += 10;
  if (OKeyState && Pad2YPos > 0) Pad2YPos -= 10;
  if (LKeyState && Pad2YPos < window.innerHeight - 100) Pad2YPos += 10;

  // Move the ball and update the canvas
  ball.moveBall();

  // Continue the loop if the game is active
  if (RequestFrame) {
    requestAnimationFrame(() => {
      MoveBallLoop(ball);
    });
  }
}
// Check for collisions with paddles
function checkCollision(ballY, ballX) {
  const loclPad1XPos = 50 + 12.5; // Paddle 1 center
  const loclPad2XPos = DocWidth - 50; // Paddle 2 center

  const distance1 = Math.abs(ballX - loclPad1XPos);
  if (distance1 < 5 && ballY > Pad1YPos - 50 && Pad1YPos + 100 > ballY)
    dirX = true; // Bounce off Paddle 1

  const distance2 = Math.abs(ballX - loclPad2XPos);
  if (distance2 < 5 && ballY > Pad2YPos - 50 && Pad2YPos + 100 > ballY)
    dirX = false; // Bounce off Paddle 2

  // End game if a player reaches 5 points
  if (Score1 == 5 || Score2 == 5) {
    RequestFrame = false; // Stop the game loop
    canvas.onclick = () => {}; // Disable clicking to restart
    document.querySelector("#WinMsg").style.display = "block"; // Show winner
    document.querySelector("#WinPlayerId").textContent =
      Score1 > Score2 ? 1 : 2; // Display winning player
  }
}

// Generate a random direction for the ball
function GenerateRandomDir() {
  return Math.random() < 0.5;
}

// Initialize the game
canvasSetup();
window.onresize = canvasSetup; // Reconfigure the canvas when the window resizes

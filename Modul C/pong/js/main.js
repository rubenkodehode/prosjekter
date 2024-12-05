import Controls from "./controls.js";
import Paddle from "./paddle.js";
import Ball from "./ball.js";
import Score from "./score.js";

const paddle1 = document.getElementById("player1");
const paddle2 = document.getElementById("player2");
const BallElement = document.getElementById("ball");
const score1El = document.getElementById("score1");
const score2El = document.getElementById("score2");
const winnerEl = document.getElementById("winner");
console.log(paddle1, paddle2, BallElement, score1El, score2El, winnerEl);

const GAME_WIDTH = 800;
const GAME_HEIGHT = 400;

const controls = new Controls();
const player1 = new Paddle(
  document.getElementById("player1"),
  "w",
  "s",
  controls,
  400
);
const player2 = new Paddle(
  document.getElementById("player2"),
  "ArrowUp",
  "ArrowDown",
  controls,
  GAME_HEIGHT
);
const score = new Score(score1El, score2El, 5, winnerEl);
const ball = new Ball(
  BallElement,
  GAME_WIDTH,
  GAME_HEIGHT,
  () => ball.resetPosition(),
  (scorer) => score.updateScore(scorer)
);

function gameLoop() {
  player1.updatePosition();
  player2.updatePosition();
  ball.moveBall(player1.paddleY, player2.paddleY, paddle1.offsetHeight);
}

setInterval(gameLoop, 16);

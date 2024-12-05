class Score {
  constructor(score1Element, score2Element, winningScore, winnerElement) {
    this.score1Element = score1Element;
    this.score2Element = score2Element;
    this.winningScore = winningScore;
    this.winnerElement = winnerElement;
    this.score1 = 0;
    this.score2 = 0;
  }

  updateScore(player) {
    if (player === 1) this.score1++;
    if (player === 2) this.score2++;

    this.score1Element.textContent = this.score1;
    this.score2Element.textContent = this.score2;

    if (
      this.score1 === this.winningScore ||
      this.score2 === this.winningScore
    ) {
      this.endgame();
    }
  }

  endgame() {
    const winner = this.score1 === this.winningScore ? 1 : 2;
    this.winnerElement.textContent = `Player ${winner} Wins!`;
    this.winnerElement.classList.remove("hidden");
    throw new Error("Game Over");
  }
}

export default Score;

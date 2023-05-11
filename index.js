const newGame = new Game();
newGame.resolveTurn(newGame.player);
newGame.resolveTurn(newGame.dealer);
//ul
const playerHand = document.querySelector(".player-hand");
for (let i = 0; i < newGame.player.cardArr.length; i++) {
  const currentCard = newGame.player.cardArr[i];
  const cardLi = document.createElement("li");
  cardLi.innerText = currentCard.rank + " " + currentCard.suit;
  playerHand.append(cardLi);
}

const dealerHand = document.querySelector(".dealer-hand");
for (let i = 0; i < newGame.dealer.cardArr.length; i++) {
  const currentCard = newGame.dealer.cardArr[i];
  const cardLi = document.createElement("li");
  cardLi.innerText = currentCard.rank + " " + currentCard.suit;
  dealerHand.append(cardLi);
}

const result = document.querySelector("h2");
result.innerText = newGame.checkWin();

//list is rendered with the first two cards from hand Array (this is the new instance)
//each time draw() append new li

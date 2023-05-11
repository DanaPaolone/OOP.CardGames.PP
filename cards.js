class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }
}

class Hand {
  constructor(cardArr) {
    this.cardArr = cardArr;
    //[{4,heart}, {7,spade}]
  }

  //Hand
  addCard(card) {
    this.cardArr.push(card);
  }

  playCard(rank, suit) {
    for (let i = 0; i < this.cardArr.length; i++) {
      if (this.cardArr[i].rank === rank && this.cardArr[i].suit === suit) {
        return this.cardArr.splice(i, 1);
      }
    }
    return null;
  }
}

const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
const suits = ["hearts", "clubs", "spades", "diamonds"];

class Deck {
  constructor() {
    this.cards = [];
  }

  //Deck
  generateCards() {
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        this.cards.push(new Card(values[j], suits[i]));
      }
    }
  }

  shuffleCards() {
    for (let i = 0; i < this.cards.length; i++) {
      const j = Math.floor(Math.random() * this.cards.length);
      const temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }

  draw() {
    return this.cards.pop();
  }

  deal(cardsPerHand, numHands) {
    const hands = [];
    for (let i = 0; i < numHands; i++) {
      const currentHand = [];
      for (let j = 0; j < cardsPerHand; j++) {
        currentHand.push(this.draw());
      }
      hands.push(currentHand);
    }
    return hands;
  }
}
const testDeck = new Deck();
testDeck.generateCards();
testDeck.shuffleCards();
// console.log(testDeck.cards);
const hands = testDeck.deal(3, 4);
console.log(hands);

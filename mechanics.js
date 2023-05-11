// 1. Player gets 2 cards
// 2. Player can ask for for 0 or more additional cards
// 3. Player totals points
// 4. I points > 21 player loses
// 5. Dealer repeats 1 - 4
// 6. If neither has lost, players compare points; dealer wins tie.

class Game {
    // constructor() {
    //     this.player = new Hand([]);
    //     this.dealer = new Hand([]);
    //     this.deck = new Deck();
    //     this.deck.generateCards();
    //     this.deck.shuffleCards();
    // }
    constructor() {
        this.deck = new Deck();
        this.deck.generateCards();
        this.deck.shuffleCards();

        const newHands = this.deck.deal(2, 2); // [[card, card], [card, card]]
        this.player = new Hand(newHands[0]);
        this.dealer = new Hand(newHands[1]);
    }

    resolveTurn(hand) {
        let currTotal = this.evaluateHand(hand);
        while (currTotal < 14) {
            hand.addCard(this.deck.draw());
            currTotal = this.evaluateHand(hand);
        }
    }

    evaluateHand(hand) {
        // Add values of cards in hand.
        // Return as number.
        let totalValue = 0;
        for (let i = 0; i < hand.cardArr.length; i++) {
            const currVal = parseInt(hand.cardArr[i].rank);
            if (currVal === NaN) {
                totalValue += 11;
            } else {
                totalValue += currVal;
            }
        }
        return totalValue;
    }

    checkWin() {
        const playerPoints = this.evaluateHand(this.player);
        const dealerPoints = this.evaluateHand(this.dealer);
        if (playerPoints > dealerPoints) {
            return "Player win";
        } else {
            return "dealer win";
        }
    }
}

// const thisGame = newGame();
// thisGame.resolveTurn(thisGame.player)
// thisGame.resolveTurn(thisGame.dealer)
// thisGame.checkWin();
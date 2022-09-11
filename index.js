
var value =["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];
var suits = ["Spades", "Diamonds", "Clubs", "Hearts"]; 

class Deck {
    constructor() {
    this.deck = []
    }
    createDeck(suits, value) {
        for (let s=0; s < suits.length; s++) {
            for (let v=0; v<value.length; v++) {
                this.deck.push((value[v] + " of " + suits[s]))
            }
        }
    }

    shuffleDeck() {
        for (let i = 0; i < this.deck.length; i++) {
        let s = Math.floor(Math.random() * i); 
        let temp = this.deck[i];  
        this.deck[i] = this.deck[s];
        this.deck[s] = temp;
        }
        return this.deck
    }
}

var deck = new Deck();
deck.createDeck(suits,value);
var shuffledDeck = deck.shuffleDeck()
var cutDeck = Math.ceil(shuffledDeck.length/2)
// console.log(cutDeck)
// Expected: a number that equals half the length of the array of the deck. 
// Result: as expected 

var player1 = shuffledDeck.splice(0, cutDeck);   
// console.log(player1)
// Expected: an array which includes half of the randomly assorted cards
//Result: As expected. 

var player2 = shuffledDeck.splice(-cutDeck);
// console.log(player2)
// Expected: an array which includes half of the randomly assorted cards
// Result: As expected. 

function checkSize(playerDeck) {
    if (playerDeck.length == 26) {
    return true 
    } else return ("Player deck size is not correct.")}

checkSize(player1);
checkSize(player2);

let player1Values = [];
let player2Values =[];

/* the for loops below turn the elements of each of the player's decks into numeric values so that the function that follows can compare the 
cards when they are played against each other. for example, a Jack is higher than a 10 but less than a Queen, so it is assigned a value of
11 and a Queen is assigned a value of 12. */ 

for (let i=0; i<player1.length;i++) {
    if (player1[i].startsWith("2")) {
        player1Values.push(2)
    }
    else if (player1[i].startsWith("3")) {
        player1Values.push(3)
    } else if (player1[i].startsWith("4")) {
        player1Values.push(4)
    } else if (player1[i].startsWith("5")) {
        player1Values.push(5)
    } else if (player1[i].startsWith("6")) {
        player1Values.push(6)
    }  else if (player1[i].startsWith("7")) {
        player1Values.push(7)
    } else if (player1[i].startsWith("8")) {
        player1Values.push(8)
    } else if (player1[i].startsWith("9")) {
        player1Values.push(9)
    } else if (player1[i].startsWith("10")) {
        player1Values.push(10)
    }     else if (player1[i].startsWith("J")) {
        player1Values.push(11)
    } else if (player1[i].startsWith("Q")) {
        player1Values.push(12)
    } else if (player1[i].startsWith("K")) {
        player1Values.push(13)
    } else if (player1[i].startsWith("A")) {
        player1Values.push(14)
    } 
}

// console.log(player1Values)
// expected: Numerical representations of the Player1 array elements
// results: As expected 

for (let i=0; i<player2.length;i++) {
    if (player2[i].startsWith("2")) {
        player2Values.push(2)
    } else if (player2[i].startsWith("3")) {
        player2Values.push(3)
    } else if (player2[i].startsWith("4")) {
        player2Values.push(4)
    } else if (player2[i].startsWith("5")) {
        player2Values.push(5)
    } else if (player2[i].startsWith("6")) {
        player2Values.push(6)
    }  else if (player2[i].startsWith("7")) {
        player2Values.push(7)
    } else if (player2[i].startsWith("8")) {
        player2Values.push(8)
    } else if (player2[i].startsWith("9")) {
        player2Values.push(9)
    } else if (player2[i].startsWith("10")) {
        player2Values.push(10)
    } else if (player2[i].startsWith("j")) {
        player2Values.push(11)
    } else if (player2[i].startsWith("q")) {
        player2Values.push(12)
    } else if (player2[i].startsWith("k")) {
        player2Values.push(13)
    } else if (player2[i].startsWith("a")) {
        player2Values.push(14)
    } 
}

// console.log(player2Values)
// expected: Numerical representations of the Player2 array elements
// results: As expected 


class Game {
    constructor(array1,array2) {
        this.array1 = array1
        this.array2 = array2
    }
        dealHands() { 
            var countPlayer1 = 0;
            var countPlayer2 = 0;
            for (let i=0; i < this.array1.length; i++) {
                if (this.array1[i] > this.array2[i]) { 
                countPlayer1 = countPlayer1 + 1; 
                console.log(`Hand ${i+1}:
Player 1 card: ${player1[i]}. Player 2 card: ${player2[i]}. 
Player 1 wins the hand!`)
                } else if (this.array1[i] < this.array2[i]) {
                countPlayer2 = countPlayer2 + 1; 
               console.log(`Hand ${i+1}: 
Player 1 card: ${player1[i]}. Player 2 card: ${player2[i]}. 
Player 2 wins the hand!`)
                } else console.log(`Hand ${i+1}: 
Player 1 card: ${player1[i]}. Player 2 card: ${player2[i]}. 
It's a tie!`)
            }
            if (countPlayer1 > countPlayer2) {
                return `Results: 
Player 1 wins! 
Final Score: ${countPlayer1} to ${countPlayer2}`
            } else if (countPlayer2 > countPlayer1) {
                return `Results: 
Player 2 wins! 
Final Score: ${countPlayer2} to ${countPlayer1}`
            } else return `Results: 
It's a draw! 
Final Score: ${countPlayer1} to ${countPlayer2}`
            }
        }

var game = new Game(player1Values,player2Values);

console.log(game.dealHands())

//results: Game runs as expected

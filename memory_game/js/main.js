console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped queen");
console.log("User flipped king");

if (cardsInPlay.length[0] === cardsInPlay[2]) {
	alert("You found a match");
} else {
	alert("Sorry try again")
}
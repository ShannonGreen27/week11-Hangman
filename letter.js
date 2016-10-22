var game = require('./game.js');
var word = require('./word.js');

var wrongGuess = [];
var gameWord;
var wordArray = [];
exports.wordArray;
var wordToBeGuessed = new WordToBeGuessed(game.randomWord)
wordToBeGuessed.makeDashes();

// var showGuessedLetter = new ShowGuessedLetter(wordArray,wrongGuess);
// showGuessedLetter.printInfo();

function WordToBeGuessed(randomWord) {
	this.randomWord = randomWord,
	this.makeDashes = function() {
		for (var i = 0; i < randomWord.length; i++) {
		wordArray[i] = "_";
		}
		gameWord = wordArray.join(" ");
		console.log(gameWord);
	}
}

// function ShowGuessedLetter(wordArray,wrongGuess) {
// 	this.wordArray = wordArray,
// 	this.wrongGuess = wrongGuess,
// 	this.printInfo = function() {
// 		console.log(wordArray);
// 	}
// }


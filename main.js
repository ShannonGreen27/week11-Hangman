var inquirer = require('inquirer');
var randomWord = require('./game.js');
var word = require('./word.js');
var WordToBeGuessed = require('./letter.js');

function getGuess(){
console.log('Welcome to Hangman');

var wordToBeGuessed = new WordToBeGuessed(randomWord)
wordToBeGuessed.hiddenWord();
inquirer.prompt([

	{
		type: 'input',
		message: 'Make a guess at the word',
		name: 'userGuess',
	}

]).then(function(answer) {

});
}

// function Hangman(randomWord,userGuess) {
// 	this.randomWord = randomWord,
// 	this.userGuess = userGuess,
// }
getGuess();
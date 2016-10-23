var inquirer = require('inquirer');
var randomWord = require('./game.js');
var CheckIfWrong = require('./word.js');
var WordToBeGuessed = require('./letter.js');

var wordToBeGuessed = new WordToBeGuessed(randomWord)
var guessesRemaining = 8;

function playHangman(){

	console.log('You have '+guessesRemaining+' guesses remaining.');

	wordToBeGuessed.hideShow();
	console.log(randomWord);
	if (guessesRemaining !== 0) {
		inquirer.prompt([

			{
				type: 'input',
				message: 'Make a guess at the word',
				name: 'userGuess',
			}

		]).then(function(answer) {

			var userGuess = answer.userGuess;
			var checkIfWrong = new CheckIfWrong(randomWord,answer.userGuess);
			if (checkIfWrong.wrongGuess.indexOf(userGuess) == -1) {
				var wordToBeGuessed = new WordToBeGuessed(randomWord,userGuess)
				wordToBeGuessed.hideShow(); 
			}

			if (randomWord.indexOf(userGuess) == -1 && checkIfWrong.wrongGuess.indexOf(userGuess) == -1){
				checkIfWrong.action();
				guessesRemaining--;
			}
			playHangman();
		});
	} else {
		console.log('GAME OVER. The word was '+ randomWord);
	}
}

// function Hangman(randomWord,userGuess) {
// 	this.randomWord = randomWord,
// 	this.userGuess = userGuess,
// }
playHangman();
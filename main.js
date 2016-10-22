var inquirer = require('inquirer');
var word = require('./word.js');
var letter = require('./letter.js');
var game = require('./game.js');

console.log('Welcome to Hangman');

// var wordToBeGuessed = letter.wordToBeGuessed;

inquirer.prompt([

	{
		type: 'input',
		message: 'Make a guess at the word',
		name: 'userGuess',
	}

]).then(function(answer) {
// console.log(answer.userGuess);
exports.answer;
// var checkGuess = word.CheckGuess;



	// htmlDisplay();
	// htmlDisplay2();
	// htmlDisplay3();		

	// if (wordToBeGuessed.indexOf("_") == -1) {
	// 	playAudio();
	// 	console.log("YOU WIN. PRESS ENTER TO LOAD A NEW GAME");
	// 	wins++;
	// }

	// if (guessesRemaining == 0) {
	// 	console.log("YOU LOST. PRESS ENTER TO LOAD A NEW GAME");
	// 	losses++;
	// } 
});


function htmlDisplay() {
	var html = "<h1>Welcome to Hangman<br> Lets Play</h1>" +
		"<p>" + wordToBeGuessed + "</p>" +
		"<p>Guesses remaining: " + guessesRemaining + "</p>" +
		"<p>Letters guessed: " + wrongGuess + "</p>";


		document.querySelector('#Hangman').innerHTML = html;

}

function htmlDisplay2() {
	var html2 = "<p>Wins: " + wins + "</p>";


		document.querySelector('#Hangmanphead').innerHTML = html2;
		
}

function htmlDisplay3() {
	var html3 = "<p>Losses: " + losses + "</p>";


		document.querySelector('#Hangmanpbody').innerHTML = html3;
		
}

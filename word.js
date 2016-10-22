var wrongGuess = [];
var randomWord = game.randomWord;
var answer = main.answer;
var userGuess = answer.userGuess;
var wordArray = letter.wordArray;
var checkGuess = new CheckGuess(userGuess)
// checkGuess.result();
checkGuess.print()
function CheckGuess(userGuess) {
	this.userGuess = userGuess,
	this.print = function() {
		console.log(userGuess);
	}
	// this.result = function() {
	// 	if (wrongGuess.indexOf(userGuess) == -1) {
	// 		for (var i = 0; i < randomWord.length; i++) {
	// 			if (userGuess == randomWord.charAt(i)) {
	// 				wordArray[i] = userGuess;
	// 			}
	// 		} 
	// 	}

	// 	if (wordArray.indexOf(userGuess) == -1 && wrongGuess.indexOf(userGuess) == -1){
	// 		wrongGuess.push(userGuess);
	// 		guessesRemaining--;
	// 	}
	// }
}

var wrongGuess = [];

function CheckGuess(userGuess) {
	this.userGuess = userGuess,
	this.result = function() {
		if (wrongGuess.indexOf(userGuess) == -1) {

		}

		if (wordArray.indexOf(userGuess) == -1 && wrongGuess.indexOf(userGuess) == -1){
			wrongGuess.push(userGuess);
			guessesRemaining--;
		}
	}
}

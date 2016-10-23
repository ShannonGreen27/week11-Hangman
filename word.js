function CheckIfWrong(randomWord,userGuess) {
	this.wrongGuess = [],
	this.userGuess = userGuess,
	this.randomWord = randomWord,
	this.action = function() {
			this.wrongGuess.push(this.userGuess);
			console.log("Incorrect guesses so far: "+this.wrongGuess);
	}
}

module.exports = CheckIfWrong;

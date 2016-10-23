function WordToBeGuessed(randomWord,userGuess) {
	this.wordArray = [],
	this.randomWord = randomWord,
	this.userGuess = userGuess
	this.hideShow = function() {

		for (var i = 0; i < randomWord.length; i++) {
			if (userGuess == randomWord.charAt(i)) {
					this.wordArray[i] = userGuess;
				} else {
					this.wordArray[i] = "_";
			}
		}
		gameWord = this.wordArray.join(" ");
		console.log(gameWord);
	}
}

module.exports = WordToBeGuessed;

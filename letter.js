function WordToBeGuessed(randomWord,userGuess) {
	this.wordArray = [],
	this.randomWord = randomWord,
	this.userGuess = userGuess
	this.hideShow = function() {
		if (userGuess == null) { 
			for (var i = 0; i < randomWord.length; i++) {
				this.wordArray[i] = "_";
			}
		} else {
			for (var i = 0; i < randomWord.length; i++) {
				if (userGuess == randomWord.charAt(i)) {
					this.wordArray[i] = userGuess;
				}
			}
		}
		gameWord = this.wordArray.join(" ");
		console.log(gameWord);
	}
}

module.exports = WordToBeGuessed;

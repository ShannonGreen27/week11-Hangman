var wordArray = [];

function WordToBeGuessed(randomWord) {
	this.randomWord = randomWord,
	this.hiddenWord = function() {
		for (var i = 0; i < randomWord.length; i++) {
		wordArray[i] = "_";
		}
		gameWord = wordArray.join(" ");
		console.log(gameWord);
	},
	this.showLetter = function(){
		for (var i = 0; i < randomWord.length; i++) {
			if (userGuess == randomWord.charAt(i)) {
				wordArray[i] = userGuess;
			}
		} 		
	}
}

module.exports = WordToBeGuessed;

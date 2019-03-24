
var Letter = require("./Letter.js")


function Word(word) {
    this.letterArr = [];
    this.compare = "";
    for (var i = 0; i < word.length; i++) {
        this.letterArr.push(new Letter(word[i]))
    }
    this.stringReturn = function () {
        var stringReturnFinal = "";
        for (var i = 0; i < this.letterArr.length; i++) {
            stringReturnFinal += this.letterArr[i].characterCheck() + " ";
        }
        return stringReturnFinal
    }
    this.guessCheck = function (userInput) {
        for (var i = 0; i < this.letterArr.length; i++) {
            this.letterArr[i].guessCheck(userInput)
        }
    }

}


module.exports = Word;
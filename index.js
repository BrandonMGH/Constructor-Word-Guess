
var Word = require("./Word.js");
var inquirer = require("inquirer")

// ** VARIABLES **


var rulers = ["Gravity", "Matrix", "Alien","Her","Brazil", "ET", "Akira", "The Fly","AI"];
var compWordGuess = "";
var wordDisplay = "";
var wordFinal;
var leftToGuess;
var guessCount = 15

function gameStart(callback) {
    console.log("*****WELCOME TO THE SCI-FI MOVIE CROSSWORD GAME*****")
    console.log("Select words to guess the sci-fi movie!")
    console.log("You have a limited amount of guesses to figure out the movie.")
    console.log("Good Luck!!")
    setTimeout(function () {
        callback();
    }, 5000);
}

function newGame() {
    compWordGuess = "";
    var quotePull = parseInt(Math.floor(Math.random() * (rulers.length)))
    compWordGuess = rulers[quotePull]
    wordFinal = new Word(compWordGuess)
    leftToGuess = wordFinal.letterArr.length
    print()
    guessPrompt();
}


function gameOver() {
    {
        console.log("Game over.")
        inquirer.prompt([{
            type: "confirm",
            name: "playAgain",
            message: "Would you like to play again?"
        }]).then(function (response) {
            if (response.playAgain) {
                newGame()
                print()
                guessPrompt();
            } else {
                console.log("Ok, see you around!")
            }
        })
    }
}

function option() {
    console.log(`***************CONGRATULATIONS!!! YOU GUESSED THE MOVIE!*****************`)
    inquirer.prompt([{
        type: "list",
        name: "selector",
        choices: ["New", "Exit"],
        message: "Would your like to start a new game or exit?",
    }]).then(function (response) {
        if (response.selector === `New`) {
            newGame();
        }
        else {
            console.log(`Thank you for playing!  Come back again soon!`)
        }

    })
}

function displayWord() {
    wordDisplay = wordFinal.stringReturn()
    console.log(wordDisplay);
    wordFinal.compare = wordDisplay
}




function guessPrompt() {
    inquirer.prompt([{
        name: `Guess`,
        message: `Guess a letter`
    }]).then(function (response) {
        var input = response.Guess
        if (guessCount > 0) {
            if (input.length === 1) {
                wordFinal.guessCheck(input)
                wordDisplay = wordFinal.stringReturn()

                if (wordFinal.compare === wordDisplay) {
                    console.log(`Sorry, your input of ${input} was incorrect.  Please try again`)
                    guessCount--
                    console.log(`You have ${guessCount} guesse(s) remaining.`)
                    if (guessCount === 0) {
                        gameOver()
                    } else {
                        print()
                        guessPrompt()
                    }

                } else {
                    console.log(`Correct!  Guess again!`)
                    leftToGuess--
                    print();
                    if (leftToGuess === 0) {
                       option(); 
                    } else {
                        guessPrompt()
                    }
                }

            } else if (input.length === 0) {
                console.log(`Please choose a letter.`);
                guessPrompt()
            } else {
                console.log(`Please choose one letter at a time please.`)
                guessPrompt()
            }


        } else {
            gameOver()
        }
    })
}

function print() {
    console.log(`\n`)
    console.log(`******************************************`)
    displayWord()
    console.log(`\n*****************************************`)
    console.log(`\n`)
    console.log(leftToGuess)
}
gameStart(newGame)

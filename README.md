# Constructor-Word-Guess
**CONSTRUCTOR GAME WORD GUESS**

![ConstructorWordGuess](images/ConStructorGameGuess.png)

**Assignment Summary:**

In this assignment, we were tasked with creating a word guess game using object constructors that would allow users to input letters into the terminal command line through the use of Inquirer, a node package manager, to try and guess the letters inside the word. A limited about of guesses are given and should a user not guess the name of the movie within the allotted amount of guessed provided, the game will end and the user will lose the game.  Conversely, if they are able to guess the word before the guess count drops below the specified number, the user will win and they will be given the option to play again or exit the game.  



**APPS/ USED IN THIS PROJECT**

* inquirer


**GETTING STARTED**
* Clone down this respository
* Open your terminal of choice in the corresponding folder containing the cloned repository  
* Run npm install to install all the necessary packages listed in the depencies section of the package.json file
* Make sure all the javascript constructor files are properly connect to one another.  Letters.js > Word.js > index.js
* In the terminal, type "node index.js" to begin the Constructor Word Guess Game


**INSTRUCTIONS**
1. Once "node index.js" has been typed in the command line and the Constructor Word Guess Game has begun running, a welcome paragraph will appear welcoming the player to the game.  The welcome paragraph will stay in place for 5 seconds before being replaced by another grouping of text that contains the core of the game.

2. The 2nd grouping of text that appears will contain the word to be guessed (obscured initially by underscores until the user inputs the proper letters to reveal the word) and a prompt area where the user can input letters to try and guess the word.  This area will only take in one letter at a time and is case sensitive.  If a correct letter is guessed, that letter will be reviewed in the word in its appropriate position.  If an incorrect letter is guessed, a message in the console will appear telling the user to try again and decrementing the overall guess count by 1. 

3.  Once the user has guessed the word, a 3rd group of text will appear congratulating them and prompting them if they would like to play again.  The user can then choose whether or not they want to play again or exit the app. 

4.  That's it!  Thanks for playing :). 

**Screencastify Link:**
* https://drive.google.com/file/d/1wA7kaGAM5dCJokb1Jexe8tnLaBJSij_p/view


**Author:** Brandon Harris 

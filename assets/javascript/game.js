// Letter Array
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessList = [];
var guessCount = 10;

function getRndInteger(min, max) {
  // takes two integers, where min is smaller than max
  // make a random integer between min and max
  return Math.floor(Math.random() * (max - min)) + min;
};

function updateWin() {
  // update the number of wins in HTML
  document.getElementById("winCount").innerHTML = "Wins: " + wins;
}

function updateLoss() {
  // update the number of losses in HTML
  document.getElementById("lossCount").innerHTML = "Losses: " + losses;
}

function updateGuesses() {
  document.getElementById("guessCount").innerHTML = "Guesses Left: " + guessCount;
  var listText = ""
  for (i = 0; i < guessList.length; i++) {
    listText = listText + " " + guessList[i];
  }
  document.getElementById("guessesMade").innerHTML = "Your Guesses so far: <br/>" + listText;
}



function psychicGame() {
  // get a random integer between 0 and 25 (length of letters array-1)
  var letterIndex = getRndInteger(0, letters.length);

  // using the random integer, select the appropriate letter
  var chosenLetter = letters[letterIndex];

  // print selected letter to the log. mostly for testing purposes.
  console.log(chosenLetter);

  // set initial number of guesses available to 10;
  guessCount = 10;

  // reset guessList to an empty array
  guessList = [];

  // write remaining guesses to html
  updateGuesses();

  // when a key is pressed, 
  document.onkeyup = function (event) {

    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var input = event.key.toLowerCase();
    console.log(input)

    // check if it is the selected answer
    if (chosenLetter === input) {
      // if it is, then add one win
      wins++;

      // update win count
      updateWin();

      // start a new game
      psychicGame();
    } else {
      // if it is not, update guess list, 
      guessList.push(input);

      // write current guess list to the log,
      console.log(guessList)

      // remove one remaining guess
      guessCount--;

      // update guess list and guesses remaining
      updateGuesses();
    }
    // if no guesses remain,
    if (guessCount == 0) {
      // add one loss
      losses++;

      //update loss count
      updateLoss();

      //play again
      psychicGame()
    }
  }
};

psychicGame();


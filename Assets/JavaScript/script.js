//Creating an array for all of the letters
var computerChoices =[ "a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Creating a Variable to hold wins, losses, guesses and letters used

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];
var lettersUsed = null;

// Setting the computerGuess variable equal to a random choice from the computer choice array

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function countGuessesLeft (){
    document.querySelector("#guessesLeft").innerHTML = "You have " + guessesLeft +" guesses left!";
    }

function farUserGuesses () {
    document.querySelector("#letter").innerHTML = "The letters you have guessed so far are " + letterUser. join (' ');
}

countGuessesLeft () ;
    
var restart = function ()
    {
            guessesLeft = 9;
            letterUser = [];
            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }

//When the user presses a key, the function will run
document.onkeyup = function(event){
{
    guessesLeft--;
    
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    //Shows the letters guess and how many guesses are left
    letterUser.push(userGuess);
	countGuessesLeft();
	farUserGuesses();
}
// Restarts the game if you win or lose
if (userGuess === computerGuess)
{
    wins ++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		restart();
    } 
else if (guessesLeft ===0){
    losses ++;
    document.querySelector("#lose").innerHTML = "Losses: " + losses ;
        restart();
        
}
};





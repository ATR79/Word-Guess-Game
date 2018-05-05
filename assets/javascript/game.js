
//create an array of words//

var bodyParts = ["nose", "eyes", "feet", "hands", "chest", "ears", "mouth", 
"teeth", "hair", "cheek", "chin", "knee cap", "wrist", "shoulder", "elbow", 
"toe nails"];
var win = 0;
var lose = 0;
var lettersUsed = []; //array to capture letters used
var dashes = [];
var correctWord = [];
var randomPart;

function startGame (){
    randomPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
    console.log(randomPart);
    for(var i = 0; i<randomPart.length; i++) {
     correctWord.push(randomPart[i]);
     dashes.push("__");
     
    }
    wordAppear();
}

function wordAppear () {
  var displayWord = "";
  for(var i = 0; i<dashes.length; i++) {
    displayWord+=" " + dashes[i];
  }
console.log(displayWord);
  document.getElementById("word-guess").innerHTML = displayWord;
}

//users guess - onkeyup
startGame();
document.onkeyup=function(event) {
  var userGuess = event.key;
  console.log(event.key);
}

//is the letter guess right or wrong
//if letter correct wordAppear - is game over?
//if incorrect put in letters-guessed
//-1 guesses remaining
//is game over? 
//if game not over, update scores
//if game over, restart



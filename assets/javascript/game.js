alert("Press Any Key to Get Started!");

//create an array of words//

var bodyParts = ["nose", "eyes", "feet", "hands", "chest", "ears", "mouth", 
"teeth", "hair", "cheek", "chin", "knee cap", "wrist", "shoulder", "elbow", 
"toe nails"];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var win = 0;
var lose = 0;
var lettersUsed = [];
var dashes = [];
var randomPart;

function startGame (){
    randomPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
    
    for(var i = 0; i<randomPart.length; i++);
  console.log(i);
}


startGame();
//choose random bodyPart

//users guess

//right or wrong

//create variables to keep up with number of guesses left and letters used


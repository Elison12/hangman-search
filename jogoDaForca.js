console.log("Vamos jogar!");
console.log("Digite uma palavra: ");

let secretWord = prompt();

var wordTest = new Boolean(/^[a-zA-Z]*$/.test(secretWord));

while (wordTest == false || secretWord.length == 0) {
	console.log("A palavra precisa conter apenas letras");
	console.log("Digite outra palavra: ");

	let secretWord = prompt();
    var wordTest = new Boolean(/^[a-zA-Z]*$/.test(secretWord));
}

secretWord = secretWord.toUpperCase();

var lives = 5;
var counter = -1;
var wordLenght = secretWord.length;
const secretArray = secretWord.toUpperCase();
var printArray = [];
var guessedLatters  = [];
var numberStore = 0;
var victory = new Boolean(false);

for (const letter in printArray) {
    counter++;
    printArray[counter] = "-";
}

while (lives > 0) {
    counter = -1;
    var printProgress = printArray.join(" ");
    var letterFound = new Boolean(false);
    var multiples = 0;

    if (printProgress == secretWord) {
        victory = true;
        break
    }
    if (lives > 1) {
        console.log("vc tem %s chances", lives)
    }
    else{
        console.log("vc tem apenas %s chances", lives)
    }
    console.log("atual: " + printProgress)
    console.log("advinhe uma letra: ");

    let playerGuess = prompt();

    var guessTest = new Boolean(/^[a-zA-Z]*$/.test(playerGuess));

    while (guessTest == false || playerGuess.length != 1) {
        console.log("Insira apenas uma letra!")
        playerGuess = prompt();
        guessTest = new Boolean(/^[a-zA-Z]*$/.test(playerGuess))
    }

    playerGuess = playerGuess.toUpperCase();
    var  playerChar = String.fromCharCode(playerGuess)

    if (guessed) {
        
    }
}






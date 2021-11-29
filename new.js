console.log("Vamos jogar!");
console.log("Digite uma palavra: ");

let secretWord = prompt();

while (wordTest == false || secretWord.length == 0) {
	console.log("A palavra precisa conter apenas letras");
	console.log("Digite outra palavra: ");

	let secretWord = prompt();
    var wordTest = new Boolean(/^[a-zA-Z]*$/.test(secretWord));
}

secretWord = secretWord.toUpperCase();

var secWordArr = secretWord.split("")
var lives = 5;
var counter = -1;
var wordLenght = secWordArr.length;
var secretArr = new Array(wordLenght).fill("_")
console.log(secretArr)
var guessedLatters  = [];
var numberStore = 0;
var victory = new Boolean(false);

while(lives > 0){

  if(secWordArr.toString() == secretArr.toString()){
      
      console.log("Parabens voce ganhou!")
      break

    }else{

  console.log("atual: " + secretArr)
  console.log("advinhe uma letra: ");

  let playerGuess = prompt();

  var guessTest = new Boolean(/^[a-zA-Z]*$/.test(playerGuess));

  while (guessTest == false || playerGuess.length != 1) {

      console.log("Insira apenas uma letra!")
      playerGuess = prompt();
      guessTest = new Boolean(/^[a-zA-Z]*$/.test(playerGuess))
      
    }

    playerGuess = playerGuess.toUpperCase();

    if(secWordArr.includes(playerGuess)){

      var indices = [];
      var idx = secWordArr.indexOf(playerGuess);
      while (idx != -1) {
        indices.push(idx);
        idx = secWordArr.indexOf(playerGuess, idx + 1);
        }
      for(var i = 0; i < indices.length; i++){
        var posicao = indices[i]
        var removed = secretArr.splice(posicao, 1, playerGuess)
      }

      lives = lives

    }else{

      lives = lives-1
      console.log("Voce errou restam: " + lives + " vidas")

    }

    }
}
if(lives == 0){

  console.log("Voce perdeu!")

}

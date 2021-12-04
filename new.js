var word = $("#enterWord #word-field");
var answerArray = [];
var secretWord = "";
var guessArray = [];
var wordLength = 0;


function getWord() {
    secretWord = word.val();
    letters = secretWord.split('');
    for (i = 0; i < letters.length; i++) {
        $(".dashes span").text(letters.length);
        answerArray[i] = " _ ";
        $(".dashes div").append(answerArray[i]);
    }
    return secretWord;
}


$("#enterWord #submit-word").on("click", function (e) {
    e.preventDefault()
    Sword = getWord();
    //chama função que valida a palavra
    valid(Sword);
    $("#enterWord #word-field").hide();
    $("#enterWord #submit-word").hide();
    $("#playerOne h2").hide();
})


$(".alpha").on("click", function (e) {
    e.preventDefault();
});

$(".alpha").children().on("click", letterTry);


window.addEventListener('keyup', validLetter);
// window.addEventListener('keyup', playGame);


function valid(palavra) {
    var wordTest = new Boolean(/^[a-zA-Z]*$/.test(palavra));

    if (wordTest == false) {
        // Location.reload();
        window.location.reload(true);
        alert("A palavra não pode conter numeros !")
    } else {
        // playGame(palavra);
        // letterTry();
    }
}

function letterTry() {
    var guess = $(this).attr('id');
    console.log(guess);
    return guess;
}


function validLetter(ev) {
    const letra = ev.key;
    if (ev.keyCode >= 65 && ev.keyCode <= 90) {
        // console.log(ev.keyCode);
        console.log(letra);
        // return letra;
    }
}

// function playGame(palavraSecreta, ev) {
//     // palavraSecreta = palavraSecreta.toUpperCase();
//     // var guess = $(this).attr('id');
//     // alert($(this).attr('id'));

//     const letra = ev.key;
//     var secWordArr = palavraSecreta.split("");
//     var lives = 5;
//     var wordLenght = secWordArr.length;
//     var secretArr = new Array(wordLenght).fill("_")
//     var armLet = new Array();

//     if (ev.keyCode >= 65 && ev.keyCode <= 90) {
//         console.log(letra);
//     }

    // while (lives > 0) {

    //     if (secWordArr.toString() == secretArr.toString()) {

    //         console.log("Parabens voce ganhou!")
    //         break

    //     } else {

    //         console.log("atual: " + secretArr)
    //         console.log("advinhe uma letra: ");

    //         // let playerGuess = prompt();
    //         // let playerGuess = letterTry();
    //         let playerGuess = validLetter();

    //         // playerGuess = playerGuess.toUpperCase()
    //         console.log(playerGuess);
    //         if (armLet.includes(playerGuess)) {

    //             console.log("Voce ja utilizou essa palavra! Tente outra vez!")

    //         } else {

    //             var guessTest = new Boolean(/^[a-zA-Z]*$/.test(playerGuess));

    //             while (guessTest == false || playerGuess.length != 1) {

    //                 console.log("Insira apenas uma letra!")
    //                 playerGuess = prompt();
    //                 guessTest = new Boolean(/^[a-zA-Z]*$/.test(playerGuess))

    //             }

    //             //   playerGuess = playerGuess.toUpperCase();

    //             if (secWordArr.includes(playerGuess)) {

    //                 var indices = [];
    //                 var idx = secWordArr.indexOf(playerGuess);
    //                 while (idx != -1) {
    //                     indices.push(idx);
    //                     idx = secWordArr.indexOf(playerGuess, idx + 1);
    //                 }
    //                 for (var i = 0; i < indices.length; i++) {
    //                     var posicao = indices[i]
    //                     var removed = secretArr.splice(posicao, 1, playerGuess)
    //                 }

    //                 lives = lives

    //             } else {

    //                 lives = lives - 1
    //                 console.log("Voce errou restam: " + lives + " vidas")

    //             }

    //             armLet.push(playerGuess)

    //         }

    //     }
    // }
//     if (lives == 0) {

//         console.log("Voce perdeu!")

//     }
// }

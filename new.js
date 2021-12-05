var word = $("#enterWord #word-field");
var answerArray = [];
secretWord = "";
// secretWord = null;
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
    // secretWord = Sword;
    var teste = valid(Sword);

    if (teste == false) {
        window.location.reload(true);
        alert("A palavra só pode conter letras !")
    } else {
        // playGame(Sword);
        // validLetter(Sword);
        // console.log(answerArray.length)
    }
    $("#enterWord #word-field").hide();
    $("#enterWord #submit-word").hide();
    $("#playerOne h2").hide();

    window.addEventListener('keyup', digitadas2);

})


$(".alpha").on("click", function (e) {
    e.preventDefault();
});

$(".alpha").children().on("click", letterTry);


// window.addEventListener('keyup', digitadas);


function valid(palavra) {
    var wordTest = new Boolean(/^[a-zA-Z]*$/.test(palavra));

    if (wordTest == false) {
        // Location.reload();
        // window.location.reload(true);
        // alert("A palavra só pode conter letras !")
        return false;
    } else {
        //chamar script do jogo
        // armazem(palavra);
        // playGame(palavra);
        // console.log(palavra)
        return true;
    }
}

function letterTry() {
    var guess = $(this).attr('id');
    console.log(guess);
    return guess;
}


// function validLetter(ev) {
//     const letra = ev.key;
//     if (ev.keyCode >= 65 && ev.keyCode <= 90) {
//         // console.log(ev.keyCode);
//         var lives = 5;
//         var wordLenght = secWordArr.length;
//         var secretArr = new Array(wordLenght).fill("_")
//         var armLet = new Array();

//         if (secretWord.includes(letra)) {
//             console.log(true)
//         }        
//         // return letra;
//     }
// console.log(secretWord);
// }

// function digitadas(ev) {
//     const letra = ev.key;
//     if (answerArray.length == 0) {
//         console.log("ainda não")
//         return letra;
//     } else {
//         console.log("agora sim")
//         validLetter(answerArray)
//     }
//     return letra;
// }

function digitadas2(ev) {
    const l = ev.key;
    console.log(l)
    // console.log(getWord());
    // console.log(secretWord);
    validLetter(l, ev)
    // return l;
}

lives = 5;
indices = []


function validLetter(letter, ev) {
    if (answerArray.join('') == secretWord) {
        console.log("parabéns, vc ganhou")
    }
    if (ev.keyCode >= 65 && ev.keyCode <= 90) {
        // console.log(ev.keyCode);
        // var wordLenght = secWordArr.length;
        // var secretArr = new Array(wordLenght).fill("_")
        // var armLet = new Array();

        if (secretWord.includes(letter)) {
            // console.log(true)
            // var indices = []
            var idx = secretWord.indexOf(letter);
            while (idx != -1) {
                indices.push(idx);
                idx = answerArray.indexOf(letter, idx + 1);
            }
            for (var i = 0; i < indices.length; i++) {
                var posicao = indices[i];
                answerArray.splice(posicao, 1, letter);
            }
            // $(".dashes div").append(answerArray[i]);
            lives = lives
        }
        else {
            lives = lives - 1;
            console.log("vc errou, restam " + lives + " vidas");
        }
    }
    // if (secretWord.includes(letter)) {
    //     console.log(true)
    // }
    if (lives == 0) {
        console.log("vc perdeu")
    }
    console.log(answerArray);
}
    // console.log(secretWord);

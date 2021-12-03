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


$("#enterWord #submit-word").on("click", function(e) {
    e.preventDefault()
    Sword = getWord();
    //chamar função que valida a palavra
    $("#enterWord #word-field").hide();
    $("#enterWord #submit-word").hide();
    $("#playerOne h2").hide();
})


function valid (palavra) {


}




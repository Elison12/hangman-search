var word = $("#enterWord #word-field");
var answerArray = [];
secretWord = "";
var wordLength = 0;
var letters = ""

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null

    }

}
class BinarySearchTree {

    constructor() {
        this.root = null
    }

    find(value) {
        if (!this.root) return false

        let current = this.root
        let found = false
        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                found = true
            }

        }

        if (!found) return undefined;
        return found
    }

    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (current) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
}

var arvore = new BinarySearchTree()


function getWord() {
    secretWord = word.val();
    letters = secretWord.split('');
    for (i = 0; i < letters.length; i++) {
        $(".dashes span").text(letters.length);
        answerArray[i] = " _ ";

    }
    document.getElementById("p1").innerHTML = answerArray
    return secretWord, letters;
}

$("#enterWord #submit-word").on("click", function (e) {
    e.preventDefault()
    Sword = getWord();
    Sword = secretWord;
    var teste = valid(Sword);

    if (teste == false) {
        window.location.reload(true);
        alert("A palavra só pode conter letras !")
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


function valid(palavra) {
    if (palavra.length == 0) {
        alert('A palavra não pode ser nula')
        window.location.reload(true);
    }
    var wordTest = new Boolean(/^[a-zA-Z]*$/.test(palavra));

    if (wordTest == false) {
        return false;
    } else {
        return true;
    }
}

function letterTry() {
    var guess = $(this).attr('id');
    console.log(guess);
    return guess;
}


function digitadas2(ev) {
    const l = ev.key;
    console.log(l)

    validLetter(l, ev)
}

lives = 5;
indices = []
var root = root


function validLetter(letter, ev) {

    if (arvore.find(ev.keyCode) == true) {

        fireLetterAlert(letter)

    } else {

        if (ev.keyCode >= 65 && ev.keyCode <= 90) {

            if (letters.includes(letter)) {

                var indices = []
                var idx = letters.indexOf(letter);
                while (idx != -1) {
                    indices.push(idx);
                    idx = letters.indexOf(letter, idx + 1);
                }
                for (var i = 0; i < indices.length; i++) {
                    var posicao = indices[i];
                    answerArray.splice(posicao, 1, letter);
                    document.getElementById("p1").innerHTML = answerArray
                }
                lives = lives
                if (answerArray.toString() == letters.toString()) {
                    console.log("parabéns, vc ganhou")
                    fireSweetAlert();

                    setTimeout(() => {
                        window.location.reload(true);
                    }, 5000);
                }
            } else {
                lives = lives - 1;
                console.log("vc errou, restam " + lives + " vidas");
                console.log(lives);
                updateImage(lives);
            }
        }
        if (lives == 0) {
            console.log("vc perdeu")
        }
        console.log(answerArray);
    }

    function updateImage(lives) {
        if (lives == 4) {
            $("img").attr("src", "assets/img/life4.png");
        } else if (lives == 3) {
            $("img").attr("src", "assets/img/life3.png");
        } else if (lives == 2) {
            $("img").attr("src", "assets/img/life2.png");
        } else if (lives == 1) {
            $("img").attr("src", "assets/img/life1.png");
        } else {
            $("img").attr("src", "assets/img/lose.png");

            setTimeout(() => { fireErrorAlert() }, 500);

            setTimeout(() => {
                window.location.reload(true);
            }, 5000);
        }
    }
    arvore.insert(ev.keyCode)
}

function fireSweetAlert() {
    Swal.fire(
        'Ufaa',
        'Você se salvou com a palavra: ' + secretWord
    )
}

function fireErrorAlert() {
    Swal.fire(
        'Faleceu',
        'A palavra era: ' + secretWord
    )
}

function fireLetterAlert(letter) {
    Swal.fire(
        'Ixee',
        'Você ja usou a letra: ' + letter
    )
}

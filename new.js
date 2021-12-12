var word = $("#enterWord #word-field");
var answerArray = [];
secretWord = "";
var wordLength = 0;
var letters = ""

//Classe Node
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null

    }

}
//Classe BST
class BinarySearchTree {

    constructor() {
        this.root = null
    }
    //Procura o valor na arvore
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
    //Insere o valor na arvore
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
//Inicia a arvore
var arvore = new BinarySearchTree()

//Pega a palavra e retorna ela em forma de string com secretWord e em forma de array com letters
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
//Pega a palavra apos o click no botao ok e envia para a validacao
$("#enterWord #submit-word").on("click", function (e) {
    e.preventDefault()
    Sword = getWord();
    Sword = secretWord;
    //Faz o teste com a palavra secreta
    var teste = valid(Sword);
    //Caso falhe no teste recarrega a pagina
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

//Faz a validacao da palavra para ver se esta propria para o jogo
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

//Funcao responsavel por pegar as letras por meio dos clicks do teclado
function digitadas2(ev) {
    const l = ev.key;

    validLetter(l, ev)
}

lives = 5;
indices = []

//Funcao responsavel pelo funcionamento do game
function validLetter(letter, ev) {

    //Verifica se o codigo da letra escolhida pelo jogador ja foi utilizada e colocada na arvore
    if (arvore.find(ev.keyCode) == true) {

        fireLetterAlert(letter)

    }
    //Verifica se o usuario digitou uma letra que faz parte do alfabeto de a-z ou A-Z
    else if(valid(ev.key) == false) {
        onlyletterAlert()
    }
    //Vai pro funcionamento do game
    else {

        if (ev.keyCode >= 65 && ev.keyCode <= 90) {
            //Ve se a letra digitada faz parte da palavra secreta
            if (letters.includes(letter)) {
                //Troca os underline pela letra digitada pelo usuario ja que faz parte da palavra secreta
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
                //Verifica se o array de respostas esta igual ao array que armazenou a palavra secreta (ambos convertidos para string)
                if (answerArray.toString() == letters.toString()) {
                    fireSweetAlert();

                    setTimeout(() => {
                        window.location.reload(true);
                    }, 5000);
                }
                //Caso a letra digitada nao faca parte da palavra secreta perde 1 vida e faz update da imagem do boneco
            } else {
                lives = lives - 1;
                updateImage(lives);
            }
        }
        //Insere o codigo da letra digitada pelo jogador na arvore
        arvore.insert(ev.keyCode)
    }
    //Funcao responsavel por dar update nas imagens
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
}
//Mensagem quando o jogador ganha
function fireSweetAlert() {
    Swal.fire(
        'Ufaa',
        'Você se salvou com a palavra: ' + secretWord
    )
}
//Mensagem quando o jogador perde
function fireErrorAlert() {
    Swal.fire(
        'Faleceu',
        'A palavra era: ' + secretWord
    )
}
//Mensagem quando o jogador ja usou essa letra
function fireLetterAlert(letter) {
    Swal.fire(
        'Ixee',
        'Você ja usou a letra: ' + letter
    )
}
//Mensagem quando o jogador usa alguma letra que nao faz parte do alfabeto
function onlyletterAlert() {
    Swal.fire(
        'Só vale letras do alfabeto !!'
    )
}

//игра виселица 1.1
let words = [
    'программа',
    'марка',
    'очки',
    'макака',
    'тачка',
    'земля',
    'змея',
    'экватор',
    'трактор',
    'попугай',
    'телевизор',
    'работа'
];

function gallows(arr) {
    let word = arr[Math.floor(Math.random() * words.length)];

    let answerArray = [];
    for(var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

    let remainingLetters = word.length;
    //попытка
    let attempt = 0;
    while(remainingLetters > 0 && attempt < 7) {
        alert(answerArray.join(" "));

        let quess = prompt("Введите букву или нажмите отмена для выхода из игры");
        if(quess === null) break;
        else if(quess.length !== 1) {
            alert("введите только 1 букву");
        }
        else {
            if(word.indexOf(quess) == -1) {
                attempt++;
            }
            for(let j = 0; j < word.length; j++) {
                if(quess.toLowerCase() === word[j]) {
                    if(answerArray[j] == "_") {
                        answerArray[j] = quess;
                        remainingLetters--;
                    }
                }
            }
        }
    }
    if(remainingLetters == 0) {
        alert("Поздравляю ты победил\n использованно попыток " + attempt);
    }
    else alert("Ты проиграл\n использованно все " + attempt + " попыток");
    alert("было загадано слово " + word);
}
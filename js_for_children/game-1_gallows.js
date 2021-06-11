//игра виселица 1.0
let words = [
    'программа',
    'марка',
    'очки',
    'макака',
    'тачка',
    'земля'
];

function gallows(arr) {
    let word = arr[Math.floor(Math.random() * words.length)];

    let answerArray = [];
    for(var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

    let remainingLetters = word.length;
    while(remainingLetters > 0) {
        alert(answerArray.join(" "));

        let quess = prompt("Введите букву или нажмите отмена для выхода из игры");
        if(quess === null) break;
        else if(quess.length !== 1) {
            alert("введите только 1 букву");
        }
        else {
            for(let j = 0; j < word.length; j++) {
                if(quess === word[j]) {
                    answerArray[j] = quess;
                    remainingLetters--;
                }
            }
        }
    }
    if(remainingLetters == 0) {
        alert("Поздравляю ты победил");
    }
    else alert("Ты проиграл");
    alert("было загадано слово " + word);
}
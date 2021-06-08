//игра виселица 1.0
words = [
    "домовой",
    "царство",
    "талант",
    "мурзилка",
    "Вилла",
    "утюг",
    "велосипед"
]

function gallows(arr) {
    var word = words[Math.floor(Math.random() * arr.length)];
    return word;
}
//переменная в виде функций
//с параметром howManyTimes
//n-ое количество 
var drawCats = function (howManyTimes) {
    for (var i = 0; i <= howManyTimes; i++) {
        console.log(i + "=^.^=");
    }
}

//запускаем функцию
//drawCats(10);

var dannie = function () {
    console.log(99 * 123);
    console.log("Вот длиная строка".slice(0, 3));
    console.log(true && false);
}

dannie();
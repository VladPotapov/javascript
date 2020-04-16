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

//dannie();

let brothers = 1, sisters = 3, candy = 8;

function division(x, y, z) {
    return x / (y + z);
}

let res = division(candy, brothers, sisters)
console.log(res);

function multiplication(x, y, z) {
    return (x + y) * z;
}

let shariki = multiplication(15, 9, 2);
console.log(shariki);

let name;
console.log(name);

let secondsInMinutes = 60;
let minutesInHour = 60;
let secondsInAnHour = secondsInMinutes * minutesInHour;
let hoursInDay = 24;
let secondsInDay = secondsInAnHour * hoursInDay;
let daysInYear
console.log(secondsInDay);
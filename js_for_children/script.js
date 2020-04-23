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
let daysInYear = 365;
let secondsInYear = secondsInDay * daysInYear;
let age = 36 * secondsInYear;   //1135296000 возвраст в милисекундах

//инкримент, дикримент
function ink_dik() {
    num_in1 = 0;
    num_in2 = 0;
    console.log("Инкримент");
    console.log(0 + ++num_in1); //1
    console.log(0 + num_in2++); //0
    console.log(num_in1 + " : " + num_in2); //1 : 1

    /** 
     * сначало выведит 2 : 1
     * после прибавит к num_in2 + 1
     */
    console.log(++num_in1 + " : " + num_in2++);
    console.log((++num_in1) + 1);   //4
    console.log((num_in2++) + 1);   //3

    console.log("\nДикримент");
    num_dik1 = 10;
    num_dik2 = 10;
    console.log(--num_dik1 - 1);    //8
    console.log(num_dik2-- - 1);    //9
    console.log(num_dik1 + " : " + num_dik2);   //9 : 9
    console.log(--num_dik1 + " : " + num_dik2--);

}

ink_dik();
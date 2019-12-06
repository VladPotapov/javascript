'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function add(x, y) {
    return x + y;
}

//let add (error)
var add2 = function add2(x, y) {
    return x + y;
};

var square = function square(x) {
    return x * x;
};

//если параметр один скобки можно не ставить
var square2 = function square2(x) {
    return x * x;
};

var giveMeAnswer = function giveMeAnswer() {
    return 42;
};

var log = function log() {
    return console.log('login');
};

/*
если в теле функции несколько строк
ставяться фигурные скобки
*/
var multiply = function multiply(x, y) {
    var result = x * y;
    return result;
};

var getPerson = function getPerson() {
    return {
        name: 'Roman'
    };
};

console.log(add(2, 5));
console.log(typeof add2 === 'undefined' ? 'undefined' : _typeof(add2));
console.log(add2(5, 15));
console.log(square(3));
console.log(square2(4));
console.log(giveMeAnswer());
log();
console.log(multiply(2, 3));
console.log(getPerson());
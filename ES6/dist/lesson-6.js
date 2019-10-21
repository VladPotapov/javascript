'use strict';

function greet(greeting, name) {
    console.log(greeting + ' ' + name);
}

greet('Hi', 'Bill');
greet('Hi'); //Hi undefined
greet(undefined, 'Bill'); //undefined Bill

//не правильно
function greet2(greeting, name) {
    if (greeting !== undefined && name !== undefined) {
        console.log(greeting + ' ' + name);
    } else if (greeting === undefined && name !== undefined) {
        console.log('Hello ' + name);
    } else if (greeting !== undefined && name === undefined) {
        console.log(greeting + ' friend');
    } else {
        console.log('Hello friend');
    }
}

//правильно
function greet3() {
    var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'friend';

    console.log(greeting + ' ' + name);
}

greet3();

function sum() {
    console.log(arguments);
    console.log(arguments instanceof Array); //false (не массив)
    Array.prototype.forEach.call(arguments, function (value) {});
}

sum(1, 3, 5);
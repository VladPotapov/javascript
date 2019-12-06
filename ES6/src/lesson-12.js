function add(x, y) {
    return x + y;
}

//let add (error)
let add2 = (x, y) => x + y;

let square = function(x) {
    return x * x;
}



//если параметр один скобки можно не ставить
let square2 = x => x * x;

let giveMeAnswer = () => 42;

let log = () => console.log('login');

/*
если в теле функции несколько строк
ставяться фигурные скобки
*/
let multiply = (x, y) => {
    let result = x * y;
    return result;
}

let getPerson = function() {
    return {
        name: 'Roman'
    };
};

console.log(add(2, 5));
console.log(typeof add2);
console.log(add2(5, 15));
console.log(square(3));
console.log(square2(4));
console.log(giveMeAnswer());
log();
console.log(multiply(2, 3));
console.log(getPerson());
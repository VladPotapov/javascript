let our_first_function = function() {
    return "Hello world";
}

let sayHelloTo = function(name) {
    return "Hello " + name;
};

let draw_cats = function(howManyTimes) {
    for(let i = 0; i < howManyTimes; i++) {
        console.log(i + "(=^.^=)");
    }
};

let print_multiple_times = function(howManyTimes, whatToDraw) {
    for(let i = 0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
};

let plus = function(num) {
    return num + Math.floor(1.2345);
};

let double = function(number) {
    return number * 2;
};

let numLetter = function(name, number) {
    if(name.length < number) {
        return;
    }
    return number + "буква твоего имени " + name[number - 1];
};
function fun() {
    var n1 = 0;
    var n2 = 1;
    var n = num();
    var n3 = num1();
    var arr = [1];
    var f1 = x_y();
    var f2 = coordinati_x_y(5, 7);
    //если равно
    if(n1 == false) {
        document.write(n1 + " == 0 <br>");
    }

    //если идентично
    if(n1 === false) {
        document.write(n1 + " === false <br>");
    }
    else {
        document.write(n1 + " !== false <br>")
    }

    if(n2 == 1) {
        document.write(n2 + " == 1 <br>");
    }
    else {
        document.write(n2 + " != 1 <br>");
    }

    //идентично
    if(n2 === 1) {
        document.write(n2 + " === 1 <br>");
    }
    else {
        document.write(n2 + " !== 1 <br>");
    }

    //true
    if(n2 == "1") {
        document.write(n2 + " == \"1\" <br>");
    }
    //false
    if(n2 === "1") {
        document.write(n2 + " === \"1\" <br>");
    }

    document.write("Сравнение числа с функцией <br>");

    //true
    if(n2 == n) {
        document.write(n2 + " == " + n + "<br>");
    }
    //true
    /*если функция возвращает такой же результат
    что и переменная то они единтичны*/
    if(n2 === n) {
        document.write(n2 + " === " + n + "<br>");
    }

    document.write("сравнение числа с массивом <br>");

    //true
    if(n2 == arr) {
        document.write(n2 + " == " + arr + "<br>");
    }
    //false
    if(n2 === arr) {
        document.write(n2 + " === " + arr + "<br>");
    }

    //сравнение фунций
    //true
    if (num() == num1()) {
        document.write("num() == num1() <br>");
    }
    //true
    if (num() === num1()) {
        document.write("num() === num1() <br>");
    }

    if (n == n3) {
        document.write("n == n3 <br>");
    }
    if (n === n3) {
        document.write("n === n3 <br>");
    }

    if (f1 == f2) {
        document.write("f1 == f2 <br>");
    }
    if (f1 === f2) {
        document.write("f1 === f2 <br>");
    }
    else {
        document.write("f1 !== f2 <br>");
    }
}

function num() {
    return 1;
}
function num1() {
    return 1;
}

function x_y(x, y) {
    this.x = x;
    this.y = y;
}

function coordinati_x_y(x, y) {
    this.x = x;
    this.y = y;
}
/*проверка на значение NaN */
var n;    //когда переменная пуста NaN
var n1 = 1; //false
var n2 = NaN;   //true
function fun1(x) {
    if (isNaN(x) == true) {
        return true;
    }
    return false;
}

function fun2() {
    var bool1 = true;
    var bool2 = false;
    //false
    if (bool1 == bool2) {
        document.write(bool1 + " == " + bool2);
    }
    //false
    if (bool1 === bool2) {
        document.write(bool1 + " === " + bool2);
    }
    //true обе переменные идентичны
    if ((bool1 === true) && (bool2 === false)) {
        document.write("true");
    }
    else document.write("false");
}

function fun3() {
    n = null;
    u = undefined;
    if (n == u) {
        document.write(n + " == " + u + "<br>");
    }
    if (n === u) {
        document.write(n + " === " + u);
    }
    else document.write(n + " !== " + u + "<br>");

    if (isNaN(n) === isNaN(u)) {
        document.write("n == u and n === u <br>");
    }
    else {
        document.write("n !== u <br>");
    }
}

function fun4() {
    n = 4.2;
    n1 = 4;
    if (n != n1) {
        document.write(n + " != " + n1);
    }
    else {
        document.write(n + " == " + n1);
    }
}

fun4();
num = 2 + 2 ? 4 : 5;    //4
num1 = "3" * "5";   //15
num2 = "3" * 2; //6
num3 = "3" * false; //0
num4 = "1" + 0; //"10"
num5 = "1" + true   //"1true"
str = "abcde" - "e";    //NaN
num6 = 5 / 2;
num7 = 0 / 0;   //NaN

//деление по модулю
num8 = 5 % 2;   //1
//деление по модулю вещественного числа
num9 = 5.3 % 2; //1.2999999999999998
num10 = -4.3 % 2;   //-0.2999999999999998

function number(x, y) {
    return x * y;
}

function number2(x, y) {
    return x * y;
}

n1 = number(3, 5);
n2 = number(3, 5);
n3 = number(5, 3);
n4 = number(2, 5);
n5 = number2(3, 5);

//объекты, массивы, функции сравниваются по ссылке
function proverka() {
    //n1 == n2 true
    //n1 == n3 true
    //n1 == n4 false
    //n1 == n5 true
    if(n1 == n5) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

proverka();

function proverka2() {
    //n1 == n2 true
    //n1 == n3 true
    //n1 == n4 false
    //n1 == n5 true
    if(n1 === n5) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

proverka2();
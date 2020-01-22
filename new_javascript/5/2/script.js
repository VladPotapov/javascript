function f1() {
    var x = 3;
    var text = "my text! ";
    var y = text * x;   //NaN
    document.write(y);
}

function f2() {
    var x = "3";    //string
    var y = "5";    //string
    var z = x * y;  //number
    document.write(z);  //15 != "15"
}

function f3() {
    x = 3;
    y = 5;
    z = (x != y) ? "true" : "false";
    
    document.write(z);
}

function fun4() {
    w1 = 2 + 3 + 5;
    //w1 == w2
    w2 = ((2 + 3) + 5);

    document.write(w1 + " : " + w2);
}

function fun5() {
    var z = 10;
    var x, y;
    var w = x = y = z;
    var a = (5 == 5);
    var b = (2.5 + 2.5 == 5);
    var c = (2 + 2 == 4);
    var d = "none";
    var e = "yes";
    var q = a ? b : c ? d : e;
    //w1 == w
    w1 = (x = (y = z));
    document.write(q);
}


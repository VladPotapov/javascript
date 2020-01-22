//my primers
function my_fun() {
    for(var i=0;i <= 3;i++){
        text = "hello " + 3 + " ";
        document.write(text);   //hello 3 hello 3 hello 3 hello 3
    }

    document.write("<br>");
    
    for(var i = 0; i <= 3; i++) {
        num = "3" * 3;
        document.write(num + " ");  //9 9 9 9
    }

    document.write("<br>");

    //Infinity : NaN
    document.write(5 / 0 + " : " + 0 / 0 + "<br>");
    n1 = 5 / 0;
    n2 = 0 / 0;
    document.write(n1 + " : " + n2 + "<br>");
    
    n3 = (6 / 2) + " : " + (6 % 3.2);
    document.write(n3);
}
my_fun();
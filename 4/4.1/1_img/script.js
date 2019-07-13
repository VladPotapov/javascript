myImg2 = document.getElementById('myImg2');
flag = false;
function changingImg() {
    if(flag) {  // false
        myImg2.src = 'img/johnny5_s.jpg';
    }
    else {  //true
        myImg2.src = 'img/johnny5_b.jpg';
    }
    //smenit znachenie
    flag = !flag;
}
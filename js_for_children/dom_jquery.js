let h1 = document.getElementById("main-heading");

//let new_text = prompt("Напиши чего-нибудь прикольного");
let new_text = "DOM and jquery";
$("#main-heading").text(new_text);

$("body").append("<p>the end</p>");

hobby = ["программировани", "фотограффия", "видеомонтаж", "гитара"];
for(let i = 0; i < hobby.length; i++) {
    $("body").append("<p>" + hobby[i] + "</p>");
}

function fade() {
    let num = 0;
    while(num < 5) {
        $("h1").fadeOut(3000).fadeIn(3000);
        num++;
    }
}

function slide() {
    $("#img").slideUp(1000).slideDown(1000);
}

slide();
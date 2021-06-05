//if else
function name_length(name) {
    if (name.length > 6) {
        return "Какое длинющие имя";
    }
    else {
        return "краткость сестра таланта";
    }
}

function food_selection() {
    var lemon_chicken = false;
    var beef_with_black_bean = true;
    var sweet_and_sour_pork = true;

    if (lemon_chicken) {
        return "я буду курицу с лимоном";
    }
    else if (beef_with_black_bean) {
        return "я буду говядину";
    }
    else if (sweet_and_sour_pork) {
        return "я буду свинину";
    }
    else {
        return "я буду рис с яйцом";
    }
}

function hello_user(name) {
    users = ["Роман", "Людмила", "Той"];

    if(users.indexOf(name) != -1) {
        if(name == users[0]) {
            return "Привет мне";
        }
        else if (name == users[1]) {
            return "Привет мама";
        }
        else if (name == users[2]) {
            return "Привет Той";
        }
    }
    else {
        return "Привет незнакомец";
    }
}

function zoo(arr, name) {
    if (arr.indexOf(name) == 0) {
        return name.repeat(3);
    }
    else {
        return "а это точно домашнее животное?";
    }
}

//while
function counted() {
    var sheepCounted = 0;
    while (sheepCounted < 10) {
        console.log("посчитанно овец: " + sheepCounted + "!");
        sheepCounted++;
    }
    console.log("хррррррр ням ням ням");
}

//for
function for_sheep (n) {
    var text = " sheep ";
    for (var i = 0; i < n; i++) {
        document.write(text.repeat(i));
        document.write("<br>");
    }
}

function my_zoo(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log("у меня есть: " + arr[i] + ".");
    }
}

function name_length2(name) {
    let n = 1;
    for(var i = 0; i < name.length; i++) {
        console.log("буква " + n + " = " + name[i]);
        n++;
    }
}

function stepeni(n) {
    for(var i = n; i < 10000; i *= 2) {
        console.log(i);
    }
}

function stepeni_while(n) {
    while(n < 10000) {
        console.log(n);
        n *= 2;
    }
}
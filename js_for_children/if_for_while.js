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
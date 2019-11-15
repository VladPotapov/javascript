class Task {
    constructor(title) {
        this.title = title;
        this.done = false;
        console.log("Создание задачи");
    }
}

class SubTask extends Task {}

let task = new Task("Изучить Javascript");
let subtask = new SubTask("Изучить Jquery");

console.log(task);
console.log(subtask);
console.log(subtask instanceof SubTask);
console.log(subtask instanceof Task);
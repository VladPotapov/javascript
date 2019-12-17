let languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];
/*ES5
let js = languages[0];
let php = languages[1];
let py = languages[2];
let rb = languages[3];
*/

//ES6
let js, php, py, rb;
[js, php, py, rb] = languages;

function fun1() {
    console.log(js, php, py, rb);
}
fun1();
'use strict';

var languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];
/*ES5
let js = languages[0];
let php = languages[1];
let py = languages[2];
let rb = languages[3];
*/

//ES6
var js = void 0,
    php = void 0,
    py = void 0,
    rb = void 0;
js = languages[0];
php = languages[1];
py = languages[2];
rb = languages[3];


function fun1() {
    console.log(js, php, py, rb);
}
fun1();
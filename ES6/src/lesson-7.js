let browsers = ['Crome', 'Firefox', 'Opera', 'IE', 'Safari'];

for (let browser in browsers) {
    console.log(browser);
}

for (let index in browsers) {
    console.log(browsers[index]);
}

for (let browser of browsers) {
    console.log(browser);
}

console.log(browsers);
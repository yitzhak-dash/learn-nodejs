// file system
var fs = require('fs');

// This can be useful in setting up an app. fo reading config. file and you need read it before any code can run.
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);
console.log('finish');

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function (err, data) {
    console.log(data);
});

console.log('finish 2');


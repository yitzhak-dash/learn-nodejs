var Greetr = require('./greeter');

var greetr = new Greetr();
greetr.on('greet', function (data) {
    console.log(`someone said: ${data}`);
});

greetr.greet('Hello 543');
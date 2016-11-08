var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = 'Hello you';
}

// all object that created from Greetr will be have all props and methods of EventEmitter.
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data) {
    console.log('Bill said Monica and ' + data);
    this.emit('greet', data);
};

var greeter = new Greetr();
greeter.on('greet', function (data) {
    console.log("Here's Monica. She's going " + data);
});

greeter.greet('Zed');
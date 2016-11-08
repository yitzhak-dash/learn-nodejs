var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = 'Hello you';
}

// all object that created from Greetr will be have all props and methods of EventEmitter.
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function () {
    console.log('Bill said Monica');
    this.emit('greet');
};

var greeter = new Greetr();
greeter.on('greet', function () {
    console.log("Here's Monica");
});

greeter.greet();
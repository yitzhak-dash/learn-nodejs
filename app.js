var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    // that will resolve the problem with the inherits
    EventEmitter.call(this);
    this.greeting = 'Hello you';
}

// all object that created from Greetr will be have all props and methods
//      from prototype of EventEmitter.
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
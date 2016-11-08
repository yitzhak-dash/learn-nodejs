var EventEmitter = require('./EventEmitter');
var emitter = new EventEmitter();

console.log(emitter);

var listener1 = function () {
    console.log("Someone, somewhere said Nyu");
};

function listener2() {
    console.log("Know your enemy");
}

emitter.on('nyu', listener1);
emitter.on('nyu', listener2);

console.log(emitter);

console.log('The knight said Nyu!!!');

emitter.emit('nyu');


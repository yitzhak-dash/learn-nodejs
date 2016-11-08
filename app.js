var EventEmitter = require('./EventEmitter');
var emitter = new EventEmitter();

console.log(emitter);

var listener1 = function () {
    console.log("Someone, somewhere said Nyu");
};

emitter.on('nyu', listener1());

console.log(emitter);

console.log('The knight said Nyu!!!');


'use strict';

var EventEmitter = require('events');

// extends it's like "util.inherits(Greetr, EventEmitter);"
module.exports = class Greetr extends EventEmitter {
    constructor() {
        // like ```EventEmitter.call(this);```
        super();
        this.greeting = "Hello word";
    }

    greet(data) {
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data);
    }
};


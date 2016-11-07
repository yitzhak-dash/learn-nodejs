var greet = require('./greeting1');
greet();

var greet2 = require('./greeting2').greet;
greet2();

var greet3 = require('./greeting3');
greet3.greet();
greet3.greeting = "Hello 3. Changed greetings!!!";

// here we're working with the same object(by reference);_
var greet3b = require('./greeting3');
greet3b.greet();

var Greet4 = require('./greeting4');
var grtr = new Greet4();
grtr.greet();
grtr.greeting = "Hello 4. Changed greetings";


var Greet4B = require('./greeting4');
// In that case we can't changed the object.
var grtrB = new Greet4B();
grtrB.greet();

var greet5 = require('./greeting5').greet;
greet5();


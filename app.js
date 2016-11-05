// function statement
function greet() {
    console.log('hi');
}
greet();

// func. are first-class
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

//function expression
var greetMe = function () {
    console.log('Hello body');
};
greetMe();

logGreeting(greetMe);

logGreeting(function () {
    console.log('[*] Hi you');
});
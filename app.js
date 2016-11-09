'use strict';
// class is syntactic sugar only.
class Person {
    // works like function constructor.
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    // Person.prototype.greet = func...
    greet() {
        console.error(`greet method  ${this.name} ${this.id}`);
    }
}

var p = new Person("Avi", 333);
p.greet();



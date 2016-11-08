var person = {
    firstName: '',
    lastName: '',
    greet: function () {
        return 'Hello ' + this.firstName + ' ' + this.lastName;
    }
};

// creates new obj. john,
// the person obj. is prototype of john.
var john = Object.create(person);



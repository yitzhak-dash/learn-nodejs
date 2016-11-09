var obj = {
    name: "John Doe",
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
};

obj.greet();

// params in call overrides this keyword.
obj.greet.call({name: 'Jane Doe'});
obj.greet.apply({name: 'Donald Duck'});
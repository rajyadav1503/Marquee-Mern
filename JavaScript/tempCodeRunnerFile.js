const person = new Object({

    name : 'Raj',
    age : 21,

    greet : function () {
        console.log("Hello");
    }

});

let greet = person.greet();
greet();
    
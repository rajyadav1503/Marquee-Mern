function greet() {

    // return 90;   // This will not print as this is like calling 90() wihch is nothinig.

    // console.log('Hello');   // this will be shown as output as this is not return , its just printing the message.

    return function () {                            // this is like calling function()  , when we did greetMsg().
        console.log('Good Morninig');
    };
}

let greetMsg = greet();
greetMsg();
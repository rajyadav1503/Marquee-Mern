function greet() {

    return 90;

    return function () {
        console.log('Good Morninig');
    };
}

let greetMsg = greet();
greetMsg();
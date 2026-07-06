function greet(name) {
    console.log(`hello , ${name}`);
}

//Pasing function as a parameter.

function execute(fn , name) {

    fn(name);

}
greet('Raj');

execute(greet,'Anuj');
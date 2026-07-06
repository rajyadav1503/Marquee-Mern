function greet(name) {
    console.log(`hello , ${name}`);
}

//Pasing function as a parameter using fn .
 
function execute(fn , name) {

    fn(name);

}
greet('Raj');

execute(greet,'Anuj');

// Variable for function

let greetFunction = greet;
greetFunction('Raj');
console.log(greetFunction('Raj'));
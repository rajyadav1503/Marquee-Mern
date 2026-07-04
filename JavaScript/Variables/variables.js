
// Hoisting .

console.log(name);    // It should give undefined .

var name = 'Raj';

greet();      // it will call the function as functions are fully hoisted .

function greet(){
    console.log("Hello ");
}

//console.log(surname);      // It should give Reference Error .  
//let surname = "Yadav";


// Let keyword

{
    let name = 'Raj';
    //name = 'Abhi';  // Allowed
    //let name = 'Raj'     // not allowed , cannot re-initialize let variables.
    console.log(name);

}

let a = null;
console.log(typeof(a));

console.log('one'*12);     // gives NaN

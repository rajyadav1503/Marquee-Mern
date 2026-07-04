let name = null;
let displayName = name ?? 'Raj';
console.log(displayName);

name = 'Vikas';

// let isAdmin;
// let anotherName = isAdmin ?? 'Mohit';
// console.log(anotherName);   // Output : Mohit.



// let anotherName = isAdmin ?? 'Mohit';
// let isAdmin;

// console.log(anotherName);    // Reference Error.


//Nested if-else

let age = 18;
if(age >= 18){
    console.log('Yes,can drive');
}else{
    console.log('Cannot drive, Minor');
}


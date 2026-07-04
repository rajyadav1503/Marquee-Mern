let x = 10;

if(x % 2 == 0){
    console.log("Even number");
}else{
    console.log('Odd number');
}

// can drive or not.

let age = 18;

if(age>=18){
    console.log('Can Drive , Adult');
}else{
    console.log('Cannot Drive , Minor');
}


function checkEven(value){
    if(value % 2 == 0){
        console.log(`${value} is even`);
    }else{
        console.log(`${value} is odd`);
    }
}

function checkAdminOrNot(value){
    if(value === true){
        console.log('User is Admin');
    }else{
        console.log('Guest User');
    }
}

function canVoteOrNot(value){
    if(value >= 18){
        console.log('Yes , Can vote.');
    }else{
        console.log('No , Cannot Vote.');
    }
}
let age = 25;
canVoteOrNot(age);
checkEven(23);
checkAdminOrNot(true);   // condition satisfied , out is 'User is Admin'
checkAdminOrNot('true');   // condition not satisfied , output is 'Guest User'  As string data type is passed .
checkAdminOrNot(1);   // condition not satisfied , output is 'User is Admin'    As int data type is passed .
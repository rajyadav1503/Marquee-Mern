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



checkEven(23);
checkAdminOrNot(1234);
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
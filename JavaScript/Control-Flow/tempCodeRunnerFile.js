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
checkAdminOrNot(true);
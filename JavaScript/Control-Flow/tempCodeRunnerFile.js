function UserCanDriveOrNot(age , license){
    if(age>=18){
        if(license === true){
            console.log('Yes , can drive.');
        }else{
            console.log('No , cannot drive.');
        }
    }else{
        console.log('No , cannot drive.');
    }
}

UserCanDriveOrNot(22 , true);
/*
// 90-100 -> A+
// 80-89 ->A

*/
let marks = 74;

function getGrade(marks) {

    switch(true) {

        case (marks <= 32):
            return 'Fail';
        
    
        case (marks <= 59):
            return 'D';
    

        case (marks <= 69):
            return 'C';
   

        case (marks <= 79):
            return 'B'


        case (marks <= 89):
            return 'A';
       

        case (marks <= 100):
        console.log('D');
            return 'A+';

        default:
            return 'Invalid Marks';
    }
    
    
}

console.log(getGrade(marks));

// Switch Case 


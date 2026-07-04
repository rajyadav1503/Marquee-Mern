//  Numbers from 1-30 that are not not divisible by 3 and 5

function numbersNotDivisibleBy3and5 () {

    for(let i = 0 ; i <= 30 ; i++ ) {

        if(i % 3 != 0 && i % 5 != 0) {
            console.log(i);
        }
    }

}

numbersNotDivisibleBy3and5();
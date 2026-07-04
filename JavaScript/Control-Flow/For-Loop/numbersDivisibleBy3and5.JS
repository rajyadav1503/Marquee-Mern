// Numbers divisible by 3 and 5   from 1 to 15 .

function numbersDivisibleBy3and5 () {

    for(let i=0 ; i<=15 ; i++) {

        if(i % 3 == 0 && i % 5 == 0) {
            console.log(i);
        }
    }
}

numbersDivisibleBy3and5();
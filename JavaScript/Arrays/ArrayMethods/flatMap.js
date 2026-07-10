let arr = [ 1 , [2, [23]],3 ,4 ,5,6 ,7];

let newArr = arr.flatMap( x =>  x*2,3);

console.log(newArr);
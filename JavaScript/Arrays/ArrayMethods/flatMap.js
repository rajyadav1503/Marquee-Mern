let arr = [ 1 , 2 ,3 ,4 ,5,6 ,7];

let newArr = arr.flatMap( x => [ x , x*2]);

console.log(newArr);
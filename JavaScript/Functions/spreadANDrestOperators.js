//spread operators

const arr1 = [1,2,3];
const arr2 = [...arr1,4 ,5];

console.log(arr2);


// rest operators

let values = [1 , 4, 5 , 'Hello'];
let [val1 ,val2, ...rest] = [...values];

console.log(val1);
console.log(val2);
// console.log(val3);  // referenceError val3 not defined.

console.log(rest);
(function (val1 , val2 ) {
    console.log(`Hello greet ${val1 + val2}`);
})(12,12);
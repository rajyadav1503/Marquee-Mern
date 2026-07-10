const arr = [1, 2, 3 ,4,5];

const result = arr.flatMap(x => [x, x * 2]);

console.log(result);
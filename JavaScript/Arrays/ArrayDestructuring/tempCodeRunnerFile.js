let arr1 = ['apple' , 'banana','Mango' , 'cherry' , 'litchi'];
const [first , second , ...third] = [...arr1];
console.log(first);
console.log(second);
console.log(third);
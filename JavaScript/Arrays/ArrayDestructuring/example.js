// let arr = ['apple' , 'banana','Mango' , 'cherry' , 'litchi'];
// const [first , second , third] = arr;
// console.log(first);
// console.log(second);
// console.log(third);

//output : apple banana mango




// diff method

// let arr1 = ['apple' , 'banana','Mango' , 'cherry' , 'litchi'];
// const [first , second , ...third] = [...arr1];
// console.log(first);
// console.log(second);
// console.log(third);

// output : [ 'Mango', 'cherry', 'litchi' ]



const [first , second , third ] = ['BMW'];
console.log(first);
console.log(second);



const user = {
    name : 'John',
    age : 54,
    gender : 'male'
};

const {age , name } = user;

console.log(age);
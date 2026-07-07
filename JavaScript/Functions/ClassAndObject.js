function createPerson(name , age) {
    
    return {
        name:name,
        age:age,
        greet() {
            console.log(`Hello, I am ${this.name} and my age is ${this.age} years`);
        }
    }
}

let Person1 =createPerson('Raj', 21);
let Person2 = createPerson('Nitu' , 21);

Person1.greet();
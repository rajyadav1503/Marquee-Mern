function Dog (name , breed , age ) {

    this.name = name ;
    this.breed = breed ;
    this.age = age ;
    
    this.sound = function () {

        console.log('Woof !!');
    };

}

const animal1 = new Dog('Pogo' , 'Labrador' , 5);

console.log(animal1);
console.log(animal1.sound());
console.log(animal1.age);
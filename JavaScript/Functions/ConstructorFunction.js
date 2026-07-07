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


function Student ( Enroll_id , name , Email , Phone , address , course , year ) {

    this.Enroll_id = Enroll_id ;
    this.name = name ;
    this.Email = Email;
    this.Phone = Phone ;
    this.address = address ;
    this.course = course ;
    this.year = year ;

    this.updateName = function( newName ) {
        this.name = newName;
    };

    this.updateEmail = function ( newEmail ) {

        this.Email = newEmail ;
    };

    this.updatePhone = function ( newPhone ) {
        this.Phone = newPhone;
    };

    this.updateAddress = function ( newAddress ) {

        this.address = newAddress;
    };

    this.updateCourse = function ( newCourse ) {

        this.course = newCourse ;
    }

    this.updateYear = function ( newYear ) {

        this.year = newYear;
    };

}

const Student1 = new Student(1328 , 'Nitu' , '123@gmail.com' , 8837012591 , 'Vadodara' , 'Btech' , '2028');


console.log(Student1);

Student1.updateName('Raj');
console.log(Student1.name);

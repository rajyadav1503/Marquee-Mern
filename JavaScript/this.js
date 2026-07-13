const student1 = {
    name: "Raj",

    greet() {
        console.log(this.name);
    }
};

const student2 = {
    name: "Nitu",

    greet() {
        console.log(this.name);
    }
};

student1.greet();
student2.greet();


function greet() {
    console.log(this);
}

greet();
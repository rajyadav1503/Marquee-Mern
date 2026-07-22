let str = 'Laksh';
console.log(Object().__proto__);

let reversed = str.split("").reverse().join("");
console.log(reversed);

function reverseString(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

console.log(reverseString("JavaScript"));

String.prototype.transform = function () {
    let result = "";

    for (let i = 0; i < this.length; i++) {
        result += this[i] + "*";
    }

    return result;
};

console.log("hello".transform());
console.log("Raj".transform());
console.log(str.transform());

console.log(transform.__proto__);
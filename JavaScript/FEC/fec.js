console.log("Global Execution Context starts");
var globalVariable = "I am a global variable";
console.log(globalVariable);
console.log(globalFunction);
globalFunction();
console.log("Global Execution Context ends");
var globalFunction = function () {
    console.log("Inside global function");
};
function greet() {
    var name = "Hashtag";
    console.log("Inside Global Function.");
}
    
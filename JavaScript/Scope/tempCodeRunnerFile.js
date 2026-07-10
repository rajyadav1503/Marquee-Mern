
function createArray(){
    let arr = [1,2,3,4,5];

    function Push(val){
        arr.push(val);
    }

    function getArray () {
        console.log(arr);
    }

    function getElement(index) {
        if(index < 0 || index > arr.length - 1){
            return 'not found';
        }
        return arr[index];
    }

    return {
        Push ,
        getArray
    };
}

const myArray = createArray();

myArray.Push(50);

console.log(myArray.getArray());

console.log(myArray.getElement(3));
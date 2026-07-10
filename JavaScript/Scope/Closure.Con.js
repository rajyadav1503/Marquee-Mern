function outer() {
    
    let sum = 1;

    function inner(){

        sum++;
        console.log(`sum is ${sum}`);

    }

    return inner();
}

// outer();
// console.log(outer());

const outerFn = outer();
// console.log(outerFn);

function createArray(){
    let arr = [1,2,3,4,5];

    function Push(val){
        arr.push(val);
    }

    function getArray () {
        return arr;
    }

    function getElement(index) {
        if(index < 0 || index > arr.length - 1){
            return 'not found';
        }else{
            return arr[index];
        }
        
    }

    return {
        Push ,
        getArray,
        getElement
    };
}

const myArray = createArray();

myArray.Push(50);

console.log(myArray.getArray());

console.log(myArray.getElement(9));
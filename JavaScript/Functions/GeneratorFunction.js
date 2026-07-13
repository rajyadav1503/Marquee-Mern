function* simpleGenerator() {
    yield 'Hello';
    yield 'World';
}

const iterator = simpleGenerator();
console.log(iterator.next(123));
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


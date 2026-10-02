// function declaration = define a reusable block of code that performs a specific task
// function expressions = a way to define functions as values or variables

//expressions used in
//  1. Callbacks in asynchronous operations
//  2. Higher-Order functions
//  3. Closures
//  4. Event Listeners


//declaration:
function hello(){
    console.log("hello");
}

//expression
const hello1 = function(){
    console.log("Hello");
}
hello();
hello1();

//another example
setTimeout(hello, 3000); //here hello is callback and 3000ms

//another example

//declaration
const numbers = [1,2,3,4,5,6,7,8,9];
const squares = numbers.map(square)
console.log(squares)

function square(element){
    return Math.pow(element, 2);
}
//expression
const numbers1 = [1,2,3,4,5,6,7,8,9];
const squares1 = numbers.map(function(element){
    return Math.pow(element, 2);
}) //as we are using this function only once so, no need it to be global
console.log(squares1)

//another example:
const evenNums = numbers.filter(function(element){
    return element%2 ===0;
});
console.log(evenNums);

//another example:
const total = numbers.reduce(function(accmulator, element){
    return accmulator+element;
})
console.log(total);

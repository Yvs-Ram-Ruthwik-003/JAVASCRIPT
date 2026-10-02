// arrow function = a concise way to write function expressions
//                  good for simple functions that you use only once
// (parameters) => some code

//declaration
function hello(){
    console.log('hello')
}
hello();
//expression
const hello1 = function(){
    console.log("hello1")
}
hello1();
//arrow function
const hello3 = (name, age)=>{console.log(`hello3,${name}`)
                                console.log(`you are ${age} years old`)
                            };
hello3("Ruthwik",20);

//another example:

setTimeout(()=>console.log("work") ,3000);

//with map
const numbers = [1,2,3,4,5,6,7,8,9];
const sqaures = numbers.map((element)=>Math.pow(element,2));
console.log(sqaures);

//with filter
const evenNums = numbers.filter((element)=>element%2 === 0);
console.log(evenNums);

//with reduce
const total = numbers.reduce((accumulator, element)=>accumulator+element);
console.log(total);
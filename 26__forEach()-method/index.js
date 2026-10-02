// forEach() = method used to iterate over the elements of
//             an array and apply a specified function(callback)
//             to each element.

// array.forEach(callback) -->example
//when --> element, index, array are provided
let numbers = [1, 2, 3 , 4, 5];

numbers.forEach(display);  //forEach() is an array method that lets you run some code once for every element in an array.

console.log("")
numbers.forEach(double);
numbers.forEach(display);

function display(element){
    console.log(element);
}

//double function
function double(element, index, array){
    array[index] = element*2;
}


//another example:
let fruits = ["apple", "banana"]
//withour forEach()
for(let fruit of fruits) {
    console.log(fruit);
}
console.log("")

//with forEach()
fruits.forEach(function (fruit){
    console.log(fruit);
})

//another to represent above
fruits.forEach((fruit)=>{    //using arrow function
    console.log(fruit);
})

console.log("");
function displayFruits(element){
    console.log(element);
}
fruits.forEach(display);

//another example:
function capatalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
console.log("");
fruits.forEach(capatalize);
fruits.forEach(display);

//another example:
function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}
console.log("");
fruits.forEach(upperCase);
fruits.forEach(display);


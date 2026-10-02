// filter() = creates a new array by filtering out elements.

//           keep the element that satisfy my condition

let numbers = [1, 2 ,3, 4, 5, 6];

function isEven(element){
    return element %2 ===0;
}
let evenNums = numbers.filter(isEven);
console.log(evenNums);

function isOdd(element){
    return element %2 !==0;
}
let oddNums = numbers.filter(isOdd); //creates 
console.log(oddNums);

//another example:
const ages = [16, 17, 20, 19,19, 45];
function isAdult(element){
    return element>=18;
}
let adults = ages.filter(isAdult);
console.log(adults);

//another example:
const words = ["apple", "tomato","hello","hi"];

function getShortWords(element){
    return element.length < 4;
}
const shortWords = words.filter(getShortWords);
console.log(shortWords);

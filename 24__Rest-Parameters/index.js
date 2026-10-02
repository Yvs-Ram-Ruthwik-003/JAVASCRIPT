// 'rest parameters' = (...rest) allows a function work wit a variable number of arguments by bundling then into array.
//where as 'spread' = expands an array into seperate elements.
//here 'rest' = bundles seperate elements into an array.

const food1 = "pizza";
const food2="hamburger";
const food3 = "Dosa";
const food4 = "idli";

function openFridge(...foods){
    console.log(foods); // elements are sticked in one array
    console.log(...foods); // seperate foods
}
openFridge(food1, food2, food3, food4); 

function getFoods(...foods){
    return foods;
}
console.log(getFoods(food1, food2, food3, food4)); //same as line 11

//another example --> sum of entered numbers using rest parameter
function sum(...numbers){
    
    let result = 0;
    for(let number of numbers){
        result+=number;
    }
    return result;
}
const total = sum(1,2,3,4,5,6,11,44,5,6,2,8,5);
console.log(`your total-->${total}`);

//example: avg calculation
function avg(...numbers){
    let result = 0;
    let count = 0;
    for(let number of numbers){
        count++;
        result+=number;
    }
    return result/count;  //myapproach --> or else we can do 'return result/numbers.length;' directly
}
const average = avg(1,2);
console.log(`your average = ${average}`);

//example: combine strings
//my way
function toCombine(...strings){
    return strings;
}
const strings = toCombine("hi," , "how" , "are", "you?");
console.log(...strings);

//another way
function toCombine1(...strings){
    return strings.join(" ");
}
const strings1 = toCombine1("hi," , "how" , "are", "you?");
console.log(strings1);


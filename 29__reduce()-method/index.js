// .reduce() = reduce the elements of an array to a single value

const prices = [5,2,50,45,20,5,6,3,4];
const total = prices.reduce(sum); //sum is callback

console.log(`total: ${total.toFixed(2)}`); //until two decimal places

function sum(accumulator, element){
    return accumulator + element;   //accumulator is previous element and element is next element--> first itreation: accumulator is 0 and element is 5=>total = 5 --> second iteration: accumulator is 5 and element is 2=>total =7--> goes on and on and on and on and on  
}

//another example:
const grades = [75, 50, 90, 80, 85];
const max = grades.reduce(getMax);
console.log(max);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}



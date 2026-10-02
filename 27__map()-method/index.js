// .map() = accepts a callback and applies that function 
//          to each element of an array, then return a new array

const numbers = [1 ,2 ,3 ,4 ,5];

function square(element){
    return Math.pow(element, 2);
}
const squares = numbers.map(square);  //using forEach() the original will get updated, but using .map(callback) --> we will assign the generated to new variable
console.log(squares);

//another example
const students = ["s1", "s2", "s3", "s4"];
function upperCase(element){
    return element.toUpperCase();
}
const newStudents = students.map(upperCase);
console.log(newStudents);

//another example:
const dates = ["2024-1-10", "2025-2-11", "2026-3-10"];

function formatDates(element){

    const parts = element.split("-");  //makes date to split into three parts
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

const formatDate = dates.map(formatDates);
console.log(formatDate);
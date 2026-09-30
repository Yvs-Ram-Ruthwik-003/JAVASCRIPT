//ternary-operator = a shortcut to if() and else() statements, helps to assign a variable based on a condition 
// condtion ? condition-if-True : condition-if-False

let age = 20;
let message;
message = age>=18? "you are an adult" : "you're a minor";
console.log(message);

let time = 16;
let greeting = time<12 ? "good morning" : "good afternoon";
console.log(greeting);

let isStudent = true;
let child = isStudent? "your a student" : "your not a student";
console.log(child);

let purchaseAmount = 152;
let discount = purchaseAmount>=100? 10 : 0;
console.log(`your total is ${purchaseAmount - purchaseAmount*(discount/100)}`);
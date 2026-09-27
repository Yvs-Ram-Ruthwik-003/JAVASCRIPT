//type conversion = change the datatype of a value to another(strings, numbers, booleans)

let age = window.prompt("how old are you?");
age+=1;     //output in console will be 251 because age is string, increment adds 1 to the string.
console.log(age, typeof age);

let random_number = window.prompt("select a random number:");
random_number = Number(random_number); //to avoid above case we use type conversion
random_number+=1;   //now output will be integer increment
console.log(random_number, typeof random_number);

let x = "pizza";
let y = "pizza";
let z = "pizza";
x= Number(x);
y=String(y);
z=Boolean(z);  //anything expect empty "" is concept is considered as true. "" is considered as false
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
// String Slicing = creating a sub-string from a portion of another string
//string.slice(start, end)

const fullName = "Yarramsetty V.S Ram Ruthwik";
let firstName = fullName.slice(0, 11);
let lastName = fullName.slice(20);

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);  //negative indicates coming from back of string

let another_firstName = fullName.slice(0, fullName.indexOf(" "));
let another_lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

console.log(firstChar);
console.log(lastChar);

console.log(another_firstName);
console.log(another_lastName);

//another example:

const email = "ruthwik@gmail.com";
let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);

console.log(`UserName: ${userName}`);
console.log(`Extension: ${extension}`);
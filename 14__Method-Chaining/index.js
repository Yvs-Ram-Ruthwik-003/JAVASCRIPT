//Method Chaining = calling one method after another-->in one continous line of code.

let userName = window.prompt("Enter your UserName:");
let userName1 = window.prompt("Enter another UserName:");

//----no method chaining----
userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();

let extraChar = userName.slice(1);
extraChar = extraChar.toLowerCase();

userName = letter+extraChar;

console.log(userName);

//----with method chaining----
userName1 = userName1.trim().charAt(0).toUpperCase() + userName1.trim().slice(1).toLocaleLowerCase(); //alot of codes and variable creation decreased using method chaining.
console.log(userName1);

// variable: A container that stores a value. Behaves as if it were the value it contains.

// two steps: Declaration let x;--> Assignment x =100;
// if directly let x =100;
let age = 20;
console.log(age);
console.log(typeof age)
console.log(`you are ${age} years old`);

let x="Ram"
console.log(typeof x);
console.log(x);
console

let online =true;
console.log(`bro is online: ${online}`);
let forsale =false;          //booleans are mainly used in conditions like 'if'
console.log(`is car for sale: ${forsale}`);

let name ="ruthwik";
let Age ="20";
let student = true;
document.getElementById("p1").textContent=`your name is ${name}`;
document.getElementById("p2").textContent=Age;
document.getElementById("p3").textContent=student;

//arithematic operators= operands(values, variables, etc.)
//                       operators(+ - * /)     ex: 11 = x + 5;

let students = 20;
students = students + 1; //21
students = students - 2; //19
students = students*2;  // 38
students = students/19; // 2
students = students**2; //exponet 4
students = students%2;  //modulus operator, remaider = 0
console.log(students)

let y = 30;
//augmented assignment operators
y +=1;  //31
y-=1;   //30
y*=2;   //60
y/=30;  //2
y%=3    //remainder =2
y**=2;  //4

y++;    //incrementor operator 5
y--;    //decrementor operator 4

//operator precedence: parenthesis-->exponents-->multiplications, divisions, module-->addition, subtraction

console.log(y);

//How to accept user input

//1.easy way = window prompt
let username;
username = window.prompt("what's your username?");
console.log(username);

//2.professional way -->using HTML textbox
let username1;
document.getElementById("mysubmit").onclick = function(){
    username1 = document.getElementById("mytext").value;
    console.log(username1);
}

let username2;
document.getElementById("mysubmit2").onclick = function(){
    username2 = document.getElementById("mytext2").value;
    document.getElementById("myh2").textContent=`hello ${username2}`;
}
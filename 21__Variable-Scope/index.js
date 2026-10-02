// Variable Scope = where a variable is recongnized and accessible
//                  (local vs global)
let y =5;   //if we use const here--> we can't reassign anything to it, so it will return error as we are reassigning in function1
function1();  //invoking a function
console.log();
function2();
console.log(`y = ${y}`); //returns 2 -->  the global gets updated to local.

function function1() {
    let x = 1;
    console.log(x);
    y = x + 1;           //because when we tring use global-vs-local-->local wins
    console.log(y);
}

function function2() {
    let x = 3;      //acts as local variable --> functions can't see inside other functions 
    console.log(x);
    console.log(y);
}

//functions = a section of reusable code,
              // Declare code once, use it whenever you want, call the function to execute that code.

function happyNewYear(){
    //any code written here can be reused
    console.log("6 5 4 3 2 1 ");
    console.log("Happy New Year");
}
happyNewYear();
//using parameters
function happyNewYear1(lastYear, newYear){
    //any code written here can be reused
    console.log("6 5 4 3 2 1 ");
    console.log("Happy New Year");
    console.log(`Say bye to ${lastYear} and let's welcome ${newYear}`);
}
happyNewYear1(2026,2027); //order of parameters matter
//few examples

function add(x,y){
    let result = x+y; //another way, comment this line 21
    return result;      //return x +y; -->without creating, it directly works
}
let answer = add(2,1);
console.log(answer);
//my way but it will show the result for everytime, which we don't want --> not that usable(experiment)
function add1(x,y){
    let result = x+y;
    console.log(result);
}
add1(1,3);

//even or odd example
function isEven(number){
    
    return number%2 === 0 ? true : false;
}
console.log(isEven(12));

//Email varification function
function isValideEmail(email){
    if(email.includes("@")){
        return true;   
    }else{
        return false;
    }
    //return email.includes("@") ? true : false;  ---> using tarnary operators
}
console.log(isValideEmail("@gmail.com"))

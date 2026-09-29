// Random number generator
//general idea below:
//let randomNum = Math.floor(Math.random()*6) + 1;  //this give random number between 1 and 6

////let randomNum1 = Math.floor(Math.random()*100) + 1;  //this give random number between 1 and 100

//general form;
//const min = 20;
//const max = 100;
//let randomNumber = Math.floor(Math.random()*(max-min) + min);

//console.log(randomNum);
//console.log(randomNum1);
//console.log(randomNumber);

const mybutton = document.getElementById("mybutton");
const mylabel1 = document.getElementById("mylabel1");
const mylabel2 = document.getElementById("mylabel2");
const mylabel3 = document.getElementById("mylabel3");
const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

mybutton.onclick = function(){
    randomNum1 = Math.floor(Math.random()*(max-min)) + min;
    mylabel1.textContent = randomNum1;
    randomNum2 = Math.floor(Math.random()*(max-min)) + min;
    mylabel2.textContent = randomNum2;
    randomNum3 = Math.floor(Math.random()*(max-min)) + min;
    mylabel3.textContent = randomNum3;
}
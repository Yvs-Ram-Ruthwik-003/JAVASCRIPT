//Number Guessing Game

const min = 1;
const max = 100;
// const random = Math.floor(Math.random()*(max-min))+ min;
// console.log(random);
const answer= Math.floor(Math.random()*(max-min))+ min;

let attempts = 0;
let guess;
let running =true; // so that we can exit when it is completed

while(running){

    guess = window.prompt(`guess a number between ${min} and  ${max}:`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }
    else if(guess<min || guess>max){
        window.alert("please enter a valid number");
    }else{ 
        attempts++;
        if(guess < answer){
            window.alert("too low! try again");
        }else if(guess>answer){
            window.alert("too high! try again");
        }else{
            window.alert(`Correct! the answer was ${answer}.It took you ${attempts} attempts`);
            running = false;
        }
    }
}
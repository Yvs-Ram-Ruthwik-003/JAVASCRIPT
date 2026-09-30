//If statement = if a condition is true-->execute some code, if not-->do something else
    
// let age =20;
// if(age>=18){
//     console.log("your eligible to vote");
// }else{
//     console.log("you must be 18 to vote");
// }

// let isStudent = false
// if(isStudent){
//     console.log("your a student");
// }else{
//     console.log("your not a student");
// }

//NESTED IF:

// let age=20;
// let hasLicense = true;

// if(age >=18){
//     console.log("your are old enough to drive");

//     if(hasLicense){
//         console.log("You have your license");
//     }else{
//         console.log("you do not have your licence yet!");
//     }
// }else{
//     console.log("You must be 18+ to have a license");
// }

//else-if:

// let age= 20;

// if(age>=18){             //here we will only execute one clause and skip all the down clauses when executed-->so beware of order
//     console.log("You are old enough to enter");
// }
// else if(age<0){
//     console.log("Your age can't be below 0");
// }
// // else if(age>=100){            // if we keep this order, even when we enter 101, it will show "You are old enough to enter"-->because age>=18-->so beware of order of conditions
// //     console.log("your too OLD to enter the site"); 
// // }
// else{
//     console.log("you must be 18+ to enter");
// }

const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const myresult = document.getElementById("myresult");

let age;

mysubmit.onclick = function(){
    age = mytext.value;
    
    if(age===""){
        myresult.innerHTML = `<p style = "color:black">You have not entered any number</p>`
    }else{
       
        age=Number(age);

        if(age>=100){            
            myresult.innerHTML = '<p style = "color: yellow">you are too Old to enter this site</p>'
        }else if(age == 0){
            myresult.innerHTML = `<p style = "color: blue">You can't enter. You were just born.</p>`
        }
        else if(age>=18){             
            myresult.innerHTML = `<p style = "color: green">You are old enough to enter</p>`
        }
        else if(age<0){
            myresult.innerHTML = `<p style = "color: purple">Your age can't be below 0</p>`
        
        }
        else{
            //myresult.textContent = `you must be 18+ to enter`
            myresult.textContent = `you must be 18+ to enter`;
            myresult.style.color = 'red';
        }
    } 
}




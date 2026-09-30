// while loop = repeat some code WHILE some condition is true

let username = "";

if(username === ""){
    console.log("you didn't enter your name");
}else{
    console.log(`hello, ${username}`);
}

//using while

//while(username === ""){       -->if you use this as the condition is, it will loop infinetely --> which leads to crash of that page
//we need something to exit the while loop
while(username ===""){
    username = window.prompt(`enter your name:`); //untill you enter username, it will not let you leave-->condition to avoid infinite loop
    
}
console.log(`hello, ${username}`);  // but when you press 'cancel' instead error it will return 'null'--> then the output will become 'hello, null'
//to avoid the 'null'--> we will use OR logical operator
let username1 = "";
while(username1 ==="" || username1 === null){          //here even 'null' case also will be covered in condition to stop while loop
    username1 = window.prompt(`enter another name:`); //untill you enter username, it will not let you leave-->condition to avoid infinite loop
    
}
console.log(`hello, ${username1}`);

// there is also another variation of while loop-->do while

let username2 = "";
do{          //here first it will run the code in the do{} and then check for condition
    username2 = window.prompt(`enter another name:`); 
}while(username2 ==="" || username2 === null);
console.log(`hello, ${username2}`);

//another example for do-while
let loggedIn = true;
let userName;
let password;

while(!loggedIn){
    userName = window.prompt("enter your username:");
    password = window.prompt("enter your password:");

    if(userName === "myUserName" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in");
    }else{
        console.log("invalid creditional, please try again."); 
    }
}
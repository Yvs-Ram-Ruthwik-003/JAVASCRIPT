//callback = a function that is passed as an argument to another function.

//              used to handle asynchronous operations:  --->operations that take variable amount of time
//              1) Reading a file.
//              2) Network requests.
//              3) Interacting with databases.

//"Hey, when you're done, call this next"
//like when you're done reading a file then display the content in it.

hello();
hello1()
bye();
console.log("using callback concept:")

hello2(bye); //callback

function hello(){
    console.log("hello");
}
function hello1(){            //here it takes a little bit time process but hello1() should be done before bye() --> this is achieved through callback()
    setTimeout(function(){
        console.log("hello");
    },3000);
}
function hello2(callback){            
    setTimeout(function(){
        console.log("hello");
        callback();
    },3000);
    // callback();  -->if we keep here then it will execute bye() without waiting 3000, so the output will be 'bye and then hello'
}
function bye(){
    console.log("bye");
}

//another example
function sum(callback, x, y){
   let result = x+y;
   callback(result);
}

function displayConsole(result){
   console.log(result);
}
 
sum(displayConsole, 1, 2); //here first it calculate the sum first and then it will dispaly
//hello2(bye(sume(displayConsole, 1,2))) -->this doesn't work because we shouldn't use '()' inside 'hello2()'-->in which we are using currently bye()-->which leads to error 'callback is not a fucntion in hello2()' and leads to immediate execution of bye() first. 
// Mentioning of '()'--> leads to immediate execution without waiting. 

//function to deplay on page
function displayPage(result){
    document.getElementById("myh1").textContent = result;
}
sum(displayPage, 1,3); //after calculating the sum then only it will display on webpage;

//const = a variable that can't be changed(also called constants)

//let pi = 3.14159; --> first try
const PI = 3.14159; //has to be capitals
let radius;
let circumference;
//pi = 10 --> if anyone kept this line, for calculation this number will be taken --> so to not let that happen we use 'const'
          //-->even after using const, if they add this line again--> an error uncaught typeerror will appear in console
//radius = window.prompt("enter the radius of a circle:");
//radius=Number(radius);
//circumference = 2*pi*radius;
//console.log(circumference);

document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circumference = 2*PI*radius;
    document.getElementById("myh1").textContent=circumference+"cm";
}

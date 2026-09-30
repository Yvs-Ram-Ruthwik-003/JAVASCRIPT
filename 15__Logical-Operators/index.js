// Logical operators = used to combine or manipulate boolean values(true or false)
// AND = &&, OR = ||, NOT = !

const temp = 200;

if(temp >0){
    console.log("The Weather is GOOD");
}else if(temp <=30){
    console.log("The weather is GOOD");   //the output shows that the weather is good even though temperature is 200
}else{
    console.log("The Weather is Bad");
}
// to avoid the upper errors, we use logical operators

if(temp >0 && temp<=30){        // due to AND logical operator, the output will be Weather is BAD;
    console.log("The Weather is GOOD");
}else{
    console.log("The Weather is Bad");
}

if(temp <=0 || temp>30){        // due to OR logical operator, the output will be Weather is BAD;
    console.log("The Weather is BAD");
}else{
    console.log("The Weather is GOOD");
}
//another example
const isSunny = true;

if(!isSunny){
    console.log("IT is Cloudy");
}else{
    console.log("it is Sunny")
}

//   = assignement operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if values and datatype are equal)
//  != inequality operator
// !== strict inequality operator

const PI = 3.14

if (PI == "3.14"){
    console.log("that is PI");
}else{
    console.log("not a PI");
}
//now strict equality operator----> here the output wii be 'not a PI'
if (PI === "3.14"){           
    console.log("that is PI");
}else{
    console.log("not a PI");
}
//=
if (PI != "3.14"){
    console.log("that is not PI");
}else{
    console.log("a PI");
}
//strictly inequality
if (PI !== "3.14"){       //as the datatypes are not same, the output will be 'that is not a PI'
    console.log("that is not PI");
}else{
    console.log("a PI");
}

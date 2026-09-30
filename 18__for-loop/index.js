//for loop = repeat some code a LIMITED amount of times

for(let i = 0; i<3; i++ ){
    console.log(i);
}

console.log(" ");
for(let i = 0; i<10; i+=2 ){
    console.log(i);
}

console.log(" ");
for( i =5; i>0; i--){
    console.log(i);
}
console.log("Happy Birthday!");

console.log("")
for( i =1; i<=10; i++){
    
    if(i== 7){
        continue;  //skip 7
    }else{
        console.log(i)
    }
}

console.log("")
for( i =1; i<=10; i++){
    
    if(i== 7){
        break;  //completely break out of for loop
    }else{
        console.log(i)
    }
}


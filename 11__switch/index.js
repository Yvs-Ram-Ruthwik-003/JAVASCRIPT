// Switch = can be an efficient replacement to many else if statements

//let day = `a`;
let day = 3;

if(day == 1){
    console.log(`it is Monday`)
}else if(day == 2){
    console.log(`it is tuesday`)
}else if(day == 3){
    console.log(`it is Wednesday`)
}else if(day == 4){
    console.log(`it is Thursday`)
}else if(day == 5){
    console.log(`it is Friday`)
}else if(day == 6){
    console.log(`it is Saturday`)
}else if(day == 7){
    console.log(`it is Sunday`)
}else{
    console.log(`${day} is not a day`)
}

//Instead Use 'Switch'--> when you're checking ONE value against MANY exact possible values.
//like above

switch(day){
    case 1: 
        console.log(`it is Monday`);;
        break;
    case 2: 
        console.log(`it is Tuesday`);
        break;
    case 3: 
        console.log(`it is Wednesday`);
        break;
    case 4: 
        console.log(`it is Thursday`);
        break;
    case 5: 
        console.log(`it is Friday`);
        break;
    case 6: 
        console.log(`it is Saturday`);
        break;
    case 7: 
        console.log(`it is Sunday`);
        break;
    default:
        console.log(`${day} is not a day`);
    }
    
console.log("if we don't have break in our 'Switch::::::");
console.log("let Day = 3; then all cases from and below day=3 which is Wednesday will start executing including default")
switch(day){
    case 1: 
        console.log(`it is Monday`);;
        
    case 2: 
        console.log(`it is Tuesday`);
        
    case 3: 
        console.log(`it is Wednesday`);
        
    case 4: 
        console.log(`it is Thursday`);
        
    case 5: 
        console.log(`it is Friday`);
        
    case 6: 
        console.log(`it is Saturday`);
        
    case 7: 
        console.log(`it is Sunday`);
        
    default:
        console.log(`${day} is not a day`);
    }

    console.log('   ');
    //another example using boolean in switch:

    let testScore = 80;
    let testGrade;

    switch(true){
        case testScore >=90:
            testGrade = 'A';
            break
        case testScore >=80:
            testGrade = 'B';
            break
        case testScore >=70:
            testGrade = 'C';
            break
        case testScore >=60:
            testGrade = 'D';
            break
        default:
            testGrade = 'F'
    }
    console.log(testGrade);
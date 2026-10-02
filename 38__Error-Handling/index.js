// error = An object that is created to represent a problem that occurs.
//         Occur often with user input or establishing a connection

// there can be many errors: network errors, promise errors, security errors

// solution is to handle the error when they occur

// try{}     = Encloses code that might potentially cause a error.
// catch{}   = Catch and handle any thrown Errors from try{}
// finally{} = (optional) Always executes. Used mostly for clean up.
//             ex:  close files, close connections, release resources.

//console.lag("hello"); // uncaught type error
//console.log(x) //uncaught reference error --> as we didn't create variable x

try{
    console.log(x);
    console.log("hello");
    // NETWORK ERROR
    // PROMISE REJECTION
    // SECURITY ERRORS
}
//catch or finally must always come after try block
catch(error){
    console.log(error);
} //now we are reaching the end of the problem without disrupting the program --> using try and handle --> we caught the error

finally{
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("this always executes");
}

console.log("you have reached the end!");

//another example:

const dividend = window.prompt("enter a dividend:");
const divisor = window.prompt("enter a divisor:");

const result = dividend/divisor;
console.log(result);

// the above code is actually a dangerous code as anything divided by 0 is infinity
// the above code will stop and will not continue --> if zero case
// so keep it in try block

try{
    const dividend = Number(window.prompt("enter a dividend:"));
    const divisor = Number(window.prompt("enter a divisor:"));

    if(divisor == 0){
        throw new Error("You can't divide by zero");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("value must be a number");
    }

    const result = dividend/divisor;
    console.log(result);
}
catch(error){
    console.log(error);
}
console.log("you have reached the end!");
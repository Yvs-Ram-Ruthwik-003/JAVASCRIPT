// synchronous = Executes line by line consequently in a sequential manner
//               Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed concurrently without waiting
//                Doesn't block the execution flow and allows the program to continue
//                (I/O operations, network requests, fetching data)
//                Handled with ----> Callbacks, Promises, Async/Await

console.log("task-2");
console.log("task-3");
console.log("task-4");
console.log("task-5");
//all the above is synchronous as we have to wait until one task is done,
//order is maintained ---> task-2 --> task-3 --> task-4 --> task-5

setTimeout(()=>console.log("task-1"), 10);  //one of the many asynchronous example



//handling using callback:
function func1(callback){
    setTimeout(()=>{console.log("task-1");
                    callback()}, 3000);
}
function func2(){
    console.log("task-2");
    console.log("task-3");
    console.log("task-4");
    console.log("task-5");
}

func1(func2);  //callback
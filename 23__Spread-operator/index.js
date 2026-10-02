// spread operatpr = ... allows an iterable such as an array or string to be expanded into separate elements
//                  (unpacks the elements).
 let numbers = [ 1, 2 , 3 , 4 ,5];
 console.log(Math.max(Number(numbers))); //my thought but it returns Nan
 //Number(numbers) tries to convert the entire array into one number[max("1,2,3,4,5")], which results in NaN, so Math.max() also returns NaN.
 //we have to use spread here to unpack the array
 console.log(Math.max(...numbers)); //max(1,2,3,4,5)
 //imagine yourself opening a box and retrieve things 
 let userName = 'Ruthwik';
 console.log(userName);
 console.log(...userName);

 //to copy one array in another using spread operator
 let fruits = ["apple", "oranges", "banana"];
 let newFruits = [...fruits];
 console.log(fruits);
 console.log(newFruits);
 
 //we can conbine any number of arrays into one
 let vegetables = ["onions", "tomato", "potato"];
 let fruitsVegetables = [...fruits, ...vegetables];
 console.log(fruitsVegetables);
 

// array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"]; //we have 3 elements here in this array of fruits
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[1000]);
fruits[0] = "coconut";
console.log(fruits[0]);

//push new element
fruits.push("papaya");
console.log(fruits);

//pop last element
fruits.pop();
console.log(fruits);

//add an element in beggining
fruits.unshift("papaya");
console.log(fruits);

//remove first element
fruits.shift();
console.log(fruits);

//to find lenge of array
console.log(fruits.length);

//find index if there is a match
console.log(fruits.indexOf("orange"));
console.log(fruits.indexOf("papaya")); //return -1 if not there

//printing them individually
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}
console.log("------reverse order:")
for( i = fruits.length -1 ; i>=0; i--){
    console.log(fruits[i]);
}
//using enhanced for loop
console.log("using enhanced for loop");

for(let fruit of fruits){  //here 'fruit' is a temporary variable that receives one value at a time.
    console.log(fruit);     // 'of' --> tells --> "Give me each value from fruits, one at a time."
}

//to sort the array in an order-->in this case alpahabet order
console.log(fruits.sort())

//reverse the array --> reverse of alphabet order
console.log(fruits.reverse())
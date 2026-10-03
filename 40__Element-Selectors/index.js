// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements from the DOM(Document Object Model)

// 1. documnet.getElementById()         ----return----> ELEMENT OR NULL  
// 2. document.getElementByClassName()  ----return----> HTML COLLECTION
// 3. document.getElemenntByTagName()   ----return----> HTML COLLECTION
// 4. document.querySelector()          ----return----> ELEMENT OR NULL
// 5. document.querySelectorAll()       ----return----> NODELIST

//1.
const myh1 = document.getElementById("myh1");
myh1.style.backgroundColor = "yellow"
myh1.style.textAlign = "center";

console.log(myh1)
//experiment
try{
    const myh1 = document.getElementById("myh2"); //i am mispelling to see what will be the outpull
    console.log(myh1)          //it returns NULL -->no error is uptained
}
catch(error){
    console.log(error);
}

//2.
const fruits = document.getElementsByClassName("fruits"); //makes an array of divs of same class which you can access using index numbers
console.log(fruits);

fruits[0].style.backgroundColor = "red";
fruits[1].style.backgroundColor = "blue";
fruits[2].style.backgroundColor = "gray"; 

for(let fruit of fruits){       //html collections are iterable 
    fruit.style.backgroundColor = "red";        //html collections don't have a built-in for each method, they do alot for live updates, but unfortunately they limited number of utility methods
}
// we can't use forEach() in HTML collections --> because HTML collections are array-like but not arrays, where as forEach() is an Array Method.
// we can use above my typecasting it

Array.from(fruits).forEach(fruit =>{
    fruit.style.backgroundColor = "yellow"
})

//3.
const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements);

h4Elements[0].style.backgroundColor = 'gray'; //only heading

for(let h4Element of h4Elements){           //to access every h4 element heading
    h4Element.style.backgroundColor = "gray";
}

const liElements = document.getElementsByTagName("li");
console.log(liElements);

for(liElement of liElements){
    liElement.style.backgroundColor = "yellow";
}
//to array methods --> we can typecast HTML collections to Array
Array.from(h4Elements).forEach(h4Element=>{
    h4Element.style.color = "lightblue";
})
Array.from(liElements).forEach(liElement=>{
    liElement.style.color = "red";
})

//4. 
const element = document.querySelector(".fruits");
element.style.backgroundColor = "red";

const element1 = document.querySelector("li");
element1.style.backgroundColor = "lightgreen";

const element2 = document.querySelector("Arigatho");  //will return null, cause there is no matching element
element1.style.backgroundColor = "lightgreen";  

//5.
//NodeList is similar to HTML collection except --> it has built-in methods similar to arrays
//NodeList are 'Static' and HTML collections are 'Live'
//Since Static --> they don't update automatically in the DOM.

const fruits1 = document.querySelectorAll(".fruits");
fruits1[1].style.backgroundColor = "gray";

console.log(fruits1);

const games = document.querySelectorAll("li")
games.forEach(game =>{
    game.style.fontSize = "1.5em";
})    
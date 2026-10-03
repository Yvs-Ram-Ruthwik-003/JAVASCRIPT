// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using Javascript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

//------ .firstElementChild ------

const element = document.getElementById("mGames");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
})

//------ .lastElementChild ------

const element1 = document.getElementById("mGames");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "lightgreen";

const ulElements1 = document.querySelectorAll("ul");
ulElements1.forEach(ulElement1 => {
    const lastChild = ulElement1.lastElementChild;
    lastChild.style.backgroundColor = "lightgreen";
});

//------ .nextElementSibling ------

const element2 = document.getElementById("Call of Duty");
const nextSibling = element2.nextElementSibling;
nextSibling.style.backgroundColor = "gray";

const element3 = document.getElementById("mGames");
const nextSibling1 = element3.nextElementSibling;
nextSibling1.style.backgroundColor = "gray";

//------ .previousElementSibling ------

const element4 = document.getElementById("Table Tennis");
const prevSibling = element4.previousElementSibling;
prevSibling.style.color = "red";

//------ .parentElement ------

const element5 = document.getElementById("Forza");
const parent = element5.parentElement;
parent.style.color = "blue"; //the whole mGames will be blue color text

// ------ .children ------

const element6= document.getElementById("mindGames");
const children = element6.children;
console.log(children);

Array.from(children).forEach(child => {
    child.style.color = "violet" 
})


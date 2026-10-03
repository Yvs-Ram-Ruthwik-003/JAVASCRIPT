// -------- Example-1 <h1> --------

// Steps:
// 1. create the element
// 2. add attributes/properties
// 3. append element to DOM

// Remove HTML element

//1.
const newh1 = document.createElement("h1");
const newh2 = document.createElement("h2");
const newh3 = document.createElement("h3");
const newh4 = document.createElement("h4");

const removeElement = document.createElement("p2");

const newp1 = document.createElement("p1")
//2.
newh1.innerHTML = "I like Dosa"
newh1.id = "myh1";
newh1.style.color = "tomato";
newh1.style.textAlign = "center";

newh2.innerHTML = "I like chetney"

newh3.innerHTML = "good taste"

newh4.innerHTML = "hello"



newp1.innerHTML = "i like idli too"
newp1.id= "myp1";

removeElement.innerHTML = "i will remove this";

//3.
document.body.append(newh1); //when we use append to a parent(i.e. body here) then the (newh1) will become the last child of that parent.

document.body.prepend(newp1); //perpend --> to make it first child

document.getElementById("box1").append(newh2) //to create child in box1

const box2 = document.getElementById("box2");
document.body.insertBefore(newh3, box2);  // insertBefore(newElement, currentElement);

//how to select if there are no id in html of that element

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newh4, boxes[6]);

//creating to remove
document.body.append(removeElement);

//4. -------- Remove HTML element

document.body.removeChild(removeElement); //it's gone


//another example:
//adding list type item
const newListItem = document.createElement("li");
const games = document.getElementById("games");

newListItem.innerHTML = "Forza";

document.body.insertBefore(newListItem, newh1);
games.append(newListItem); // at the last of the list

games.prepend(newListItem); //at the beginning of the list

//between COD and Badminton
const Badminton = document.getElementById("Badminton");

document.getElementById("games").insertBefore(newListItem, Badminton); //now it will be between COD and Badminton

//if the 'li' has no id in html
const listItems = document.querySelectorAll("li");
document.getElementById("games").insertBefore(newListItem, listItems[3]); //now it will be before Table Tennis.

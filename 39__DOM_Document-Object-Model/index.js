// DOM = Document Object Model
//       Object{} that represents the page you see in the web browser and provides you with an API to interact with it.
//       Web Browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree-like representation.
//       Javascript can accsess the DOM to dynamically change the content, structure, and style of a web page.


console.dir(document); //--> gives all the properties of document which is html file
document.title = "my website";  // we can change the html 'title' here from js and also feww css as mentioned below
document.body.style.backgroundColor = "hsl(0, 15%, 78%)"; // hsl = (hue, saturation, lightness) = (what color?, how colourful?, how light/dark? );

const userName = "Ruthwik";
const WelcomeMsg = document.getElementById("myh1");

myh1.textContent += userName === "" ? 'Guest': userName;

//DOM (Document Object Model): A representation of an HTML page that JavaScript can use to access and change its elements.
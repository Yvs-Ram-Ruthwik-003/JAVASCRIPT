// constructor = special method for defining the properties and methods of objects.

function car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`you drive ${this.model}`)}
}
const car1 = new car("ford", "mustaag", 2024,"blue"); //'new' keyword is used here 

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();





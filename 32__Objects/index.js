//Object = A collection of relatd properties and/or methods
//         Can represent real world objects(people, places, products)
//object = {key:value, function()};

const person = {
    firstName: "Yarramsetty",  //these are properties(key values) of 'person' object
    lastName: "Ruthwik",
    age: 20,
    isEmployed: false,
    //ojects can have dedicated functions which is called --> methods
    sayHello: function(){console.log(`hi, I am ${person.lastName}`)},
}
console.log(person.lastName);
console.log(person.firstName);
console.log(person.age);
console.log(person.isEmployed);
person.sayHello();

const person2={
    firstName: "Thota",  //these are properties(key values) of 'person' object
    lastName: "Prem kumar",
    age: 20,
    isEmployed: true,
    sayHello: () =>{console.log(`hi, I am ${person2.lastName}`)},
}

console.log(person2.lastName);
console.log(person2.firstName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();

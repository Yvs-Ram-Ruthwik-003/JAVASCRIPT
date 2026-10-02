// this = reference to the object whre 'THIS' is used
//        (the object depends on the immediate context)
//person.name = this.name;   //as long as we are in the person object context

const person = {
    name: "Ruthwik",
    sayHello: function(){console.log(`hi, I am ${this.name}`)},
}
person.sayHello();

//***note point*** ---> Arrow functions don't have their own this; normal functions can use this to refer to the object that called them.


// static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created/
//          from the class(class owns anything static, not the objects)

class mathUtil{
    static PI = 3.14;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI *radius;
    }
}
console.log(mathUtil.PI); // I don't need to create an object to use 'PI'
console.log(mathUtil.getDiameter(10));
console.log(mathUtil.getCircumference(10));

//another example:

class user{
    static userCount = 0;
    
    constructor(username){
        this.username = username;
        user.userCount++;
    }
    greeting(){
        console.log(`hello there, I am ${this.username}`);
    }
}
const user1 = new user("Ram");
const user2 = new user("Ruthwik");

console.log(user1.username);
console.log(user1.userCount); //will return 'undefined' --> since the userCount() is static function --> have to use class name instead of object's name
console.log(user.userCount);

user1.greeting();
user2.greeting();
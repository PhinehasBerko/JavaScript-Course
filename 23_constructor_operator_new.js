// Constructor, Operator, and New
// The regular {...} syntax allows us to create one object.
//  But often we need to create many similar objects, like multiple users or menu items and so on.

// That can be done using constructor functions and the "new" operator.

// Constructor function

// Constructor functions technically are regular functions. There are 2 conventions though:
// 1. They are named with capital letter first.
// 2. They should be executed only with "new" operator.

// For instance:
class User {
    constructor(name) {
        this.name = name;
        this.isAdmin = false;
        console.log("new_target: ",new.target)
    }
}
// The above class declaration is the same as the constructor function below:

// function User(name) {
//     this.name = log;
//     this.isAdmin = true
// }


let user = new User("Jack")
user = new User("Phiny")
console.log("user: ", user)
console.log("user name: ", user.name ="John")

/* 
When a function is executed with new, it does the following steps:

A new empty object is created and assigned to this.
The function body executes. Usually it modifies this, adds new properties to it.
The value of this is returned.

*/

//  The main purpose of constructors – to implement reusable object creation code;

// Return from Constructors
// Usually, constructors do not have a return statement. 
// Their task is to write all necessary stuff into this, and it automatically becomes the result.
/* 
But if there is a return statement, then the rule is simple:

If return is called with an object, then the object is returned instead of this.
If return is called with a primitive, it’s ignored.
In other words, return with an object returns that object, in all other cases this is returned.

*/
function BigUser() {
    this.name = "Phinehas";
    return;
}
console.log("BigUser: ", new BigUser().name)

/*
Omitting parentheses
By the way, we can omit parentheses after new:

let user = new User; // <-- no parentheses
// same as
let user = new User();

Omitting parentheses here is not considered a “good style”, 
but the syntax is permitted by specification.

*/

// Method in Constructor
/*
Using constructor functions to create objects gives a great deal of flexibility. The constructor function may have parameters that define how to construct the object, and what to put in it.

Of course, we can add to this not only properties, but methods as well.

For instance, new User(name) below creates an object with the given name and the method sayHi:

*/
function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      alert( "My name is: " + this.name );
    };
  }
  
let john = new User("John");

john.sayHi(); // My name is: John

/*
Summary
Constructor functions or, briefly, constructors, are regular functions, 
but there’s a common agreement to name them with capital letter first.
Constructor functions should only be called using new. 
Such a call implies a creation of empty this at the start and returning 
the populated one at the end.
We can use constructor functions to make multiple similar objects.

JavaScript provides constructor functions for many built-in language 
objects: like Date for dates, Set for sets and others that we plan to study.

*/
// The object will be continued later in the next file
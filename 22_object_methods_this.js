// "use strict"
// Object methods, "this"

// Objects are usually created to represent entities of the real world, like users, 
// orders, inventories, cars etc.

let user = {
    name: "John",
    age: 30,
    constructor(){},
}
// the user has the ability to act in real world, eg: can walk, talk, shop or 
// login into some system, can read (all these are actions which is called "methods")
// in object
user.currentBook = () =>{
    console.log("I am reading `a book titled: how to read a book`")
}
//  Actions are represented in JavaScript by functions in properties as shown above
console.log(user)
console.log(user.currentBook())

// the "this" in methods
// it's common that an object method needs to access the 
// information stored in the  object to do its job

// To access the object, a method can use the this keyword.

// The value of this is the object "before dot", the one usedk to call the method..

// Here during the execution of user.reader(), the value of `this` will be user
user={
    ...user,
    reader(){
        console.log(`${this.name} of age: ${this.age}`)
    } 
}
let admin = user
admin.reader()
// console.log(user)

// But it is unreliable to use user.name instead of the this.name. 
// If we decide to copy user to another variable, 
// e.g. admin = user and overwrite user with something else, 
// then it will access the wrong object.
// thus admin.reader will still give an accurate result instead of throwing an error)

// “this” is not bound
// In JavaScript, keyword this behaves unlike most other programming languages. 
// It can be used in any function, even if it’s not a method of an object.

// There’s no syntax error in the following example:

function sayHi() {
  console.log( this.name );
}
// The value of this is evaluated during the run-time, depending on the context.

 user = { name: "John" };
admin = { name: "Admin" };

function sayHi() {
  console.log( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

// The rule is simple: if obj.f() is called, then this is obj during the call of f. 
// So it’s either user or admin in the example above.

// Calling without an object: this == undefined
console.log("Output before whatsApp function")
function whatsApp(){
    console.log(this)
    console.log("Output in-between whatsApp calls ...")
    console.log(this.name)
}

whatsApp()
/*
In this case this is undefined in strict mode. 
If we try to access this.name, there will be an error.

In non-strict mode the value of this in such case will be the global object 
(window in a browser, we’ll get to it later in the chapter Global object). 
This is a historical behavior that "use strict" fixes.

Usually such call is a programming error. 
If there’s this inside a function, it expects to be called in an object context.
*/

// Arrow functions have no “this”

// Arrow functions are special: they don’t have their “own” this. 
// If we reference this from such a function, it’s taken from the outer 
// “normal” function.

user = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => console.log(this.firstName);
      arrow();
    }
  };
  
  user.sayHi(); // Ilya

//For instance, here arrow() uses this from the outer user.sayHi() method:
// That’s a special feature of arrow functions, it’s useful when we actually 
// do not want to have a separate this, but rather to take it from the outer context.

/*
Summary
Functions that are stored in object properties are called “methods”.
Methods allow objects to “act” like object.doSomething().
Methods can reference the object as this.
The value of this is defined at run-time.

When a function is declared, it may use this, but that this has no value until the function is called.
A function can be copied between objects.
When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.

*/

// Chaining

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };
  
  ladder.up().up().down().showStep().down().showStep();
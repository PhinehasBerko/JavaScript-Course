// Object References and Copying

// One fundamental differences of objects versus primitives is that objects
// are stored and copied "by reference", whereas primitive values: strings,
// numbers, booleans, etc- are always copied "as a whole value"

// Primitive copying
let message = "Hello";
let pharse = message + " world";

console.log("mess: ", message);
console.log("phar: ", pharse);

// A variable assigned to an object stores not only the object itself, but it's
// `address in memory` - in other words ` a reference` to it.

// For example:
let user = {
    name: "John"
};

// The object is stored somewhere in  memory, while the user variable 
// is has a "reference" to it

// When an object variable is copied, the reference is copied,
// but the object itself is  not duplicated.

let objUser = {name: "John"};
let admin = objUser; // copy the reference
admin.age = 34;
console.log("main: ", objUser);
console.log("admin: ", objUser);

// Comparison by reference
// NB: Two objects are equal only if they are the same object.
// Example:
let a = {};
let b = a; // copy the value and the reference
console.log(a === b); // both refence the same object.

// For comparisons like obj1 > obj2 or for a comparison 
// against a primitive obj == 5, objects are converted to primitives.

// Const objects can be modified
// An important side effect of storing objects as 
// references is that an object declared as const 
// can be modified.

// Example:
const refUser = {
    name: "Phiny"
};

refUser.name = "Phinehas";
// This is possible because only the value of the user remains
// constant, it must always reference the same object, 
// but the properties are free to change
 
// In other words, the const user gives an error only 
// if we try to set user=... as a whole.

// Cloning and Merging, Object.assign

// copying an object variable creates one more reference to the same object.

// But what if we need to duplicate an object?

// We can create a new object and replicate the structure of the 
// existing one, by iterating over its properties and copying 
// them on the primitive level.

let cloneUser = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in cloneUser) {
    clone[key] = cloneUser[key];
  }

// We can also use Object.assign(destination, ...source)
// It copies the properties of all source objects into the target destination,
//  and then returns it as the result.

// We also can use Object.assign to perform a simple object cloning:
// let clone = Object.assign({}, user);

// There are also other methods of cloning an object, 
// e.g. using the spread syntax clone = {...user}

// Nested Cloning

// structuredClone
// The structuredClone method can clone most data types, such as objects, 
// arrays, primitive values.

// It also supports circular references, when an object property 
// references the object itself (directly or via a chain or references).

// Summary

// Objects are assigned and copied by reference. In other words, 
// a variable stores not the “object value”, but a “reference” 
// (address in memory) for the value. So copying such a variable or 
// passing it as a function argument copies that reference, not the object itself.

// All operations via copied references (like adding/removing properties) 
// are performed on the same single object.

// To make a “real copy” (a clone) we can use Object.assign for the 
// so-called “shallow copy” (nested objects are copied by reference) 
// or a “deep cloning” function structuredClone or use a custom cloning 
// implementation, such as _.cloneDeep(obj).

// Question 1: What is the differences between object and primitive types?

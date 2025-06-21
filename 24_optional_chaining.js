// Optional Chaining "?."

// The optional chaining ?. is a safe way to access nested object properties
// even if an intermediate property doesn't exist.

// The "non-existing property" problem

/*
Optional chaining
The optional chaining ?. stops the evaluation if the value before ?. 
is undefined or null and returns undefined.

In other words, value?.prop:

works as value.prop, if value exists,
otherwise (when value is undefined/null) it returns undefined.
user?.address.street.name the ?. allows user to safely be null/undefined 
(and returns undefined in that case), but that’s only for user. 
Further properties are accessed in a regular way. If we want some of them to be optional,
 then we’ll need to replace more . with ?..

💀 Don’t overuse the optional chaining
We should use ?. only where it’s ok that something doesn’t exist.

For example, if according to our code logic user object must exist, 
but address is optional, then we should write user.address?.street, 
but not user?.address?.street.

Then, if user happens to be undefined, we’ll see a programming error about it and fix it. 
Otherwise, if we overuse ?., coding errors can be silenced where not appropriate, 
and become more difficult to debug.

Other variants: ?.(), ?.[]
The optional chaining ?. is not an operator, but a special syntax construct, that also works with functions and square brackets.

For example, ?.() is used to call a function that may not exist.

In the code below, some of our users have admin method, and some don’t:

*/
let userAdmin = {
    admin() {
      console.log("I am admin");
    }
  };
  
  let userGuest = {};
  
  userAdmin.admin?.(); // I am admin
  
  userGuest.admin?.(); // nothing happens (no such method)

/*
Then ?.() checks the left part: if the admin function exists, 
then it runs (that’s so for userAdmin). Otherwise (for userGuest) 
the evaluation stops without errors.

The ?.[] syntax also works, if we’d like to use brackets [] to access 
properties instead of dot .. Similar to previous cases, it allows to safely 
read a property from an object that may not exist.

Also we can use ?. with delete:

delete user?.name; // delete user.name if user exists
*/

let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

console.log( user1?.[key] ); // John
console.log( user2?.[key] ); // undefined

/*
💀 We can use ?. for safe reading and deleting, but not writing
The optional chaining ?. has no use on the left side of an assignment.

For example:

let user = null;

user?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"

Summary

The optional chaining ?. syntax has three forms:

obj?.prop – returns obj.prop if obj exists, otherwise undefined.
obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
As we can see, all of them are straightforward and simple to use.
 The ?. checks the left part for null/undefined and allows 
 the evaluation to proceed if it’s not so.

A chain of ?. allows to safely access nested properties.

Still, we should apply ?. carefully, only where it’s acceptable, 
according to our code logic, that the left part doesn’t exist. 
So that it won’t hide programming errors from us, if they occur.

*/
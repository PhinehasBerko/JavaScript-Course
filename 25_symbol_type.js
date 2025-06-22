// Symbol type
/*
By specification, only two primitive types may serve as object property keys:

 1. string type, or
 2. symbol type.

Otherwise, if one uses another type, such as number, it’s autoconverted to string. 
So that obj[1] is the same as obj["1"], and obj[true] is the same as obj["true"]

Symbols
A “symbol” represents a unique identifier.

A value of this type can be created using Symbol():

*/
let id = Symbol()
// Upon creation, we can give symbols a description (also called a symbol name), 
// mostly useful for debugging purposes:

// id is a symbol with the description "id"
id = Symbol("id");

// Symbols are guaranteed to be unique. 
// Even if we create many symbols with exactly the same description, 
// they are different values. The description is just a label that doesn’t affect anything.

// here are two symbols with the same description – they are not equal:

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false

// So, to summarize, a symbol is a “primitive unique value” with an optional description
d = Symbol("id");
console.log("d.toString: ",d.toString()); // Symbol(id), now it works

// “Hidden” properties
// Symbols allow us to create “hidden” properties of an object, 
// that no other part of code can accidentally access or overwrite.

// For instance, if we’re working with user objects, 
// that belong to a third-party code. We’d like to add identifiers to them.

// Let’s use a symbol key for it:

let user = { // belongs to another code
    name: "John"
  };
  
  let id3 = Symbol("id");
  
  user[id3] = 1;
  
console.log( user[id3] );// we can access the data using the symbol as the key

/*
What’s the benefit of using Symbol("id") over a string "id"?

As user objects belong to another codebase, it’s unsafe to add fields to them, 
since we might affect pre-defined behavior in that other codebase. 
However, symbols cannot be accessed accidentally. 
The third-party code won’t be aware of newly defined symbols, 
so it’s safe to add symbols to the user objects.

Also, imagine that another script wants to have its own identifier inside user, for its own purposes.

Then that script can create its own Symbol("id"), like this:

*/

// ...
id = Symbol("id");

user[id] = "Their id value";

// There will be no conflict between our and their identifiers, 
// because symbols are always different, even if they have the same name.

// But if we used a string "id" instead of a symbol for the same purpose, 
// then there would be a conflict:

let user = { name: "John" };

// Our script uses "id" property
user.id = "Our id value";

// ...Another script also wants "id" for its purposes...

user.id = "Their id value"
// Boom! overwritten by another script!


// Symbols in an object literal
// If we want to use a symbol in an object literal {...}, we need square brackets around it.

// Like this:

id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // not "id": 123
};

// That’s because we need the value from the variable id as the key, not the string “id”.

// Symbols are skipped by for…in
// Symbolic properties do not participate in for..in loop.

// For instance:

id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
console.log( "Direct: " + user[id] ); // Direct: 123

//While Object.keys(user) also ignores them.  Object.assign copies both string and symbol properties:


id = Symbol("id");
let user = {
  [id]: 123
};

let clone = Object.assign({}, user);

console.log( clone[id] ); // 123

/*
Global symbols
As we’ve seen, usually all symbols are different, even if they have the same name. 
But sometimes we want same-named symbols to be same entities. 
For instance, different parts of our application want to 
access symbol "id" meaning exactly the same property.

To achieve that, there exists a global symbol registry. 
We can create symbols in it and access them later, and it 
guarantees that repeated accesses by the same name return exactly the same symbol.

In order to read (create if absent) a symbol from the registry, use Symbol.for(key).

That call checks the global registry, and if there’s a symbol described as key, 
then returns it, otherwise creates a new symbol Symbol(key) 
and stores it in the registry by the given key.

For instance:

// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert( id === idAgain ); // true
Symbols inside the registry are called global symbols. 
If we want an application-wide symbol, accessible everywhere in the code – that’s what they are for

Symbol.keyFor
We have seen that for global symbols, Symbol.for(key) returns a symbol by name. 
To do the opposite – return a name by global symbol – we can use: Symbol.keyFor(sym):


// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

The Symbol.keyFor internally uses the global symbol registry to 
look up the key for the symbol. So it doesn’t work for non-global symbols. 
If the symbol is not global, it won’t be able to find it and returns undefined.

That said, all symbols have the description property.

System symbols
There exist many “system” symbols that JavaScript uses internally, and we can use them to fine-tune various aspects of our objects.

They are listed in the specification in the Well-known symbols table:

Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.iterator
Symbol.toPrimitive
…and so on.
For instance, Symbol.toPrimitive allows us to describe object to primitive conversion. 
We’ll see its use very soon.

Other symbols will also become familiar when we study the corresponding language features.

Summary
Symbol is a primitive type for unique identifiers.

Symbols are created with Symbol() call with an optional description (name).

Symbols are always different values, even if they have the same name. 
If we want same-named symbols to be equal, then we should use 
the global registry: Symbol.for(key) returns (creates if needed) 
a global symbol with key as the name. Multiple calls of Symbol.for with the same 
key return exactly the same symbol.

Symbols have two main use cases:

“Hidden” object properties.

If we want to add a property into an object that “belongs” to another 
script or a library, we can create a symbol and use it as a property key. 
A symbolic property does not appear in for..in, so it won’t be accidentally 
processed together with other properties. Also it won’t be accessed directly, 
because another script does not have our symbol. 
So the property will be protected from accidental use or overwrite.

So we can “covertly” hide something into objects that we need, 
but others should not see, using symbolic properties.

There are many system symbols used by JavaScript which are accessible as Symbol.*. 
We can use them to alter some built-in behaviors. For instance, later in the tutorial 
we’ll use Symbol.iterator for iterables, Symbol.toPrimitive to 
setup object-to-primitive conversion and so on.

Technically, symbols are not 100% hidden. 
There is a built-in method Object.getOwnPropertySymbols(obj) that allows 
us to get all symbols. Also there is a method named Reflect.ownKeys(obj) 
that returns all keys of an object including symbolic ones. 
But most libraries, built-in functions and syntax constructs don’t use these methods.

*/
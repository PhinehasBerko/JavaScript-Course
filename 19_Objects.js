// Objects 
// Objects are used to store keyed collections of various data and more complex entities.
// Objects >> can be created with figures {...} with an optional list of properties.
// A property is a "Key: value" pair, where key is a string (also called a "property name"),
// and value can  be anything.

// An empty oject  can e created using one of two syntaxes:
let user = new Object(); // `object constructor` syntax;

let anotherUser = {} // "oject literal" syntax

//  NB: Usually the figure brackets {...} are used. `object literal`.

//  The properties of the object can be accessed using the dot notation.
//  example user.name = "John " is been assigned to property name of object user.

//  To remove the property or object, we can use the delete operator.
delete user.name

// NB: We can also use the multiword property names, but then they must be quoted.
// For example, 
user = {
    "likes birds": true,
}

// The last property in the list may end with a comma:  this is called a "trailing" or "hanging"
// comma. Maked it easier to add/remove/move around properties, because all lines become alike.

// Square Brackets >> are used to access properties with space in them
// For example, user["likes birtes"]. the dot notation would return an error.


// Property value short hand

let shortHand = (name, age) =>{
    name, // instead of name: name,
    age
}

// Property names limitations
// a variable cannot have name equal to one of the lang reserved words like "for",
// "let","return"  but for an  object property, there's no such restriction.

// these properties are all right
let obj = {
    for: 1,
    let: 2,
    return: 3
  };

// The "for..in" loop
// The "for..in" is a special form of loop the wallks over all the key of an object.
// This is a completely differenct  thing from the for(;;)
// For example:
for (key in user){
    // excutes the body for each key among object properties
}

// Summary
// Objects are associative arrays which stores poroperties as a key-value pairs

// To access a property, we can use:
// The dot notation: obj.property.
// Square brackets notation obj["property"]. Square brackets all taking the key
// from a vairable, like obj[varWithKey]

// Additional operators:
// To delete a property: delete obj.prop.
// To check if a property with the given key exists: "key" in obj.
// To iterate over an object: for (let key in obj) loop.

// There are many other kinds of objects in JavaScript:

// Array to store ordered data collections,
// Date to store the information about the date and time,
// Error to store the information about an error.
// …And so on.

// Exercise 1:
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let taskUser = {
    name: "John",
};

taskUser.surname = "Smith";
taskUser.name = "Pete";

console.log(taskUser)
delete taskUser.name
console.log(taskUser)

// Exercise 2:
// Write the function isEmpty(obj) which returns true if the object has no 
// properties, false otherwise.

let schedule = {};

let isEmpty=(obj) => {
    for(let key in obj){
        return false
    }

    return true
}

console.log(isEmpty(schedule))

schedule["8:30"] = "get up";

console.log(isEmpty(schedule))

// Exercise 3:
// Write the code to sum all salaries and store in the variable sum. 
// Should be 390 in the example above.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let result = 0
let salaryCalculator = (arg) =>{

for(let key in salaries){

    result += salaries[key]
}
return result
}

console.log("Exx 3")
console.log(salaryCalculator(salaries))

// Exercise 4:
// Create a function multiplyNumeric(obj) that multiplies 
// all numeric property values of obj by 2.


// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
  let multiplyNumeric = (args) =>{
    for( let key in args){
        if (typeof args[key] === "number"){
            args[key] * 2
        }
    }
  }

console.log("Exx 4")
console.log(multiplyNumeric(menu));
  
  // after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
};



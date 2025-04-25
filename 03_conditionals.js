// The “if” statement is used to execute a block of code based on a condition.

// The if(...) statement evaluates a condition in parentheses and, 
// if the result is true, executes a block of code.
// Boolean conversion
// The if (…) statement evaluates the expression in its 
// parentheses and converts the result to a boolean.

// From Type conversion
// A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
// Other values become true, so they are called “truthy”.

let age = 0;

(age > 18) ? console.log("You are an adult.") : console.log("You are a minor.");

// The purpose of the question mark operator ? is to return one value or another depending on its condition. 
// Please use it for exactly that. Use if when you need to execute different branches of code.
// LOGICAL OPERATORS
// There are 4 logical operators in JavaScript,
// they're : || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing)

//  || (OR)
// The "OR" operator is represented with two vertical
// line symbols
// In classical programming, the logical OR is meant to manipulate
//  boolean values only. If any of its arguments are true, 
// it returns true, otherwise it returns false.

// In JavaScript, the operator is a little bit trickier and 
// more powerful. But first, let’s see what happens with
//  boolean values.

console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log( 'The office is closed.' ); // it is the weekend
}

// NOTE: OR "||" finds the first truthy value
// Extra features of the || (OR) operator in JavaScript
// Given multiple OR'ed values:
// The OR operator does the following
// 1. Evalutes operands from left to right.
// 2. For each operands, converts it to boolean. If the 
// results is true, stops and returns the original value of that operand
// 3. If all operands have been evaluated (i.e. all were false), 
// returns the last operand
// A value is returned in its original form, without the conversion.

// Example:

console.log( 1 || 0 ); // 1 (1 is truthy)
console.log( null || 1 ); // 1 (1 is the first truthy value)
console.log( null || 0 || 1 ); // 1 (the first truthy value)
console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)
console.log( undefined || null ); // 0 (all falsy, returns the last value)

// && (AND)
// the AND operator is represented with two ampersands &&
// let result = a && b
// In classical programming, AND returns true if both operands are truthy 
// and false otherwise:
console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

// The AND && operator does the following:

// 1. Evaluates operands from left to right.
// 2. For each operand, converts it to a boolean. If the result is false, 
// stops and returns the original value of that operand.
// 3. If all operands have been evaluated (i.e. all were truthy), 
// returns the last operand.
// In other words, AND returns the first falsy value or the last value if none were found.

// The rules above are similar to OR. The difference is that AND
//  returns the first falsy value while OR returns the first truthy one.


// ! (NOT)
// The boolean NOT operator is represented with an exclamation sign !.

// The operator accepts a single argument and does the following:

// Converts the operand to boolean type: true/false.
// Returns the inverse value.

// A double NOT !! is sometimes used for converting a value to boolean type:
console.log( !!"non-empty string" ); // true
console.log( !!null ); // false

// That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.

// There’s a little more verbose way to do the same thing – a built-in Boolean function:

// alert( Boolean("non-empty string") ); // true
// alert( Boolean(null) ); // false
// The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.

console.log( console.log(1) || console.log(2) || 3 );

// Exercise
console.log("Exercises")
let age = 200
if (age >= 14 && age >= 90){
    console.log("older than 13 and lesser than 91")
}else console.log("incorrect conditions")

// Write an if condition to check that age is NOT between 14 and 90 inclusively
if (!(age >= 14 && age <= 90)){
    console.log("age not in range")
}else if (age >= 14 && age <= 90){
    console.log("older than 13 and lesser than 91")
}else console.log("incorrect conditions")

if (-1 || 0) console.log( 'first' );
if (-1 && 0) console.log( 'second' );
if (null || -1 && 1) console.log( 'third' );

// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
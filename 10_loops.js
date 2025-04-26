// LOOP
// Loops are a way to repeat the same code multiple times.

// THE WHILE LOOP
// the while loop has the following syntax:

// while (condition){
//     // code
//     // so-called "loop body"
// }

// While the condition is truthy, the code from the loop body is executed. 

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log( i );
  i++;
}

// A single execution of the loop body is called an iteration
let j = 3;
while (j) { // when i becomes 0, the condition becomes falsy, and the loop stops
  console.log( j );
  j--;
}

// Curly braces are not required for a single-line body
// If the loop body has a single statement, we can omit the curly braces {…}:

// THE “do…while” LOOP
// The condition check can be moved below the loop body using the do..while syntax:

// do {
//   // loop body
// } while (condition);

// The loop will first execute the body, then check the condition, and, 
// while it’s truthy, execute it again and again.
let m = 0;
do {
  console.log( m );
  m++;
} while (m < 3);

// This form of syntax should only be used when you want the body of the loop to execute
//  at least once regardless of the condition being truthy. Usually, 
// the other form is preferred: while(…) {…}

// THE “for” LOOP
// The for loop is more complex, but it’s also the most commonly used loop.

// for (begin; condition; step) {
  // ... loop body ...
// }

let k;
for( k = 0; k < 6; k++) console.log(k)
console.log(k)
// Inline variable declaration
//  the “counter” variable 'k' is declared right in the loop. 
// This is called an “inline” variable declaration. 
// Such variables are visible only inside the loop.

// Skipping parts
// Any part of for can be skipped.
// we can decide to ommit the begin/ the condition/ the step from the for loop.

let p = 0;


for (; p < 3;) { // this code make a for loop behave like a while loop
  console.log( p++ );
}




// or 
// for (;;) {
//   // repeats without limits
// }
// In the above loop the two for semicolons ; must be present.
//  Otherwise, there would be a syntax error

// Breaking the Loop

// Normally, a loop exits when its condition becomes falsy.
// But we can force the exit at any time using the special break directive

// Continue to the next iteration
// The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. 
// Instead, it stops the current iteration and forces the loop to start a 
// new one (if the condition allows).

// 💀 No break/continue to the right side of ‘?’

// Please note that syntax constructs that are not expressions cannot be 
// used with the ternary operator ?. In particular, directives such as break/continue 
// aren’t allowed there.

// the code below is not allowed👇
// (i > 5) ? alert(i) : continue; // continue isn't allowed here

// Labels for break/continue
// A label is an identifier with a colon before a loop:
// labelName: for (...) {
//   ...
// }

// The continue directive can also be used with a label. 
// In the case of continue, code execution jumps to the next iteration of the labeled loop.
// A break directive must be inside a code block. 
// Technically, any labelled code block will do

// A break directive must be inside a code block. Technically, any labelled code block will do, e.g.:

// label: {
//   // ... 
//   break label; // works
//   // ...
// }

// Summary
// while – The condition is checked before each iteration.

// do..while – The condition is checked after each iteration.

// for (;;) – The condition is checked before each iteration, additional settings available.

// To make an “infinite” loop, usually the while(true) construct is used. 
// Such a loop, just like any other, can be stopped with the break directive.

// If we don’t want to do anything in the current iteration and 
// would like to forward to the next one, we can use the continue directive.

// break/continue support labels before the loop. 
// A label is the only way for break/continue to escape a nested loop 
// to go to an outer one.

console.log("compare the 2 codes");

// let h = 0;
// while (++h < 5) console.log( h );
// console.log( "Next ")

// let ig = 0;
// while (ig++ < 5) console.log( ig );

console.log("For loop checks")
for (let mn = 0; mn < 5; ++mn) console.log( mn );
console.log("For loop checks,,,,,,")

for (let mn = 0; mn < 5; mn++) console.log( mn );
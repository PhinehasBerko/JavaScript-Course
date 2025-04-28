// Comments
//  comments can be single-line: starting with // and multiline: /* ... */.
//  normally use them to describe how and why the code works

// Bad comments
// Novices tend to use comments to explain “what is going on in the code”

// But in good code, the amount of such “explanatory” comments 
// should be minimal. Seriously, the code should be 
// easy to understand without them.

// HINT 
// There’s a great rule about that: 
// “if the code is so unclear that it requires a comment, 
// then maybe it should be rewritten instead”.

// Recipe: factor out functions

function showPrimes(n) {
  nextPrime:
  for (let i = 2; i < n; i++) {

    // check if i is a prime number
    for (let j = 2; j < i; j++) {
      if (i % 2 === 0) continue nextPrime;
    }

    console.log(i);
  }
}

showPrimes(12)

// Good comments
// X'tics of Good comment

// 1. Describe the architecture
// Provide a high-level overview of components,
// how they interact, what's the control flow in various
// situations.
// UML is used to build high-level architecture diagrams
// explaining the code.

// 2. Document function paramenters and usage
// There's a special syntax JSDoc to document a function:
// usage, parameters, returned value.


/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */

// function pow(x, n) {
//   ...
// }

// From the above;

// 1. Such comments allow us to understand the purpose 
// of the function and use it the right way without 
// looking in its code.

// Comments that explain the solution are very important. 
// They help to continue development the right way.

// 2. Any subtle features of the code? Where they are used?
// If the code has anything subtle and counter-intuitive,
// it’s definitely worth commenting.

// SUMMARY
// Comment this:
// Overall architecture, high-level view.
// Function usage.
// Important solutions, especially when not immediately obvious.

// Avoid comments:

// 1. That tell “how code works” and “what it does”.

// 2. Put them in only if it’s impossible to make the code so 
// simple and self-descriptive that it doesn’t require them.

// 3. Comments are also used for auto-documenting tools like 
// JSDoc3: they read them and generate HTML-docs (or docs in another format)
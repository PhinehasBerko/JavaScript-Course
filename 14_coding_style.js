// Coding Style

// Our code must be as clean and easy to read as possible

// That is actually the art of programming – to take a complex task 
// and code it in a way that is both correct and human-readable. 
// A good code style greatly assists in that.

// Some Rules from the example below

// There should be :
// 1. A space between parameters
// 2. No space between the function name and parentheses 
// between the parentheses and the parameter
// 3. Curly brace on the same line after a space
function pow(x, n) {
// 4. Indentation 2 space 
    let result = 1;
// 5. spaces around operations
// 6. A space after for/if/while ...
// 7. A semicolon is mandatory ;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}
// 8. A space between arguments

let x = prompt("x?", "");
let n = prompt("n?", "");
// 9. An empty line between logical blocks

if (n < 0) {
// 10. Lines are not to be very long
    console.log(`Power ${n} is not supported,
        please enter a non-negative inter number`);
} else {
    console.log( pow(x, n) );
    // 11. Space around a nested call
}

// Function Placement
// If you are writing several “helper” functions 
// and the code that uses them, there are three ways to organize the functions.

// 1.Declare the functions above the code that uses them:
// 2. Code first, then functions
// 3. Mixed: a function is declared where it’s first used.

// Most of time, the second variant is preferred.

// That’s because when reading code, we first want to know what it does. 
// If the code goes first, then it becomes clear from the start. 
// Then, maybe we won’t need to read the functions at all, especially if 
// their names are descriptive of what they actually do.


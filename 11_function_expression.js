// Functions

function sayHi1(){
    console.log("Hello");
}
// The syntax that we used above is called a Function Declaration:

// There is another syntax for creating a function that is called a Function Expression.

// It allows us to create a new function in the middle of any expression.

// For example:

let sayHi = function() {
  console.log( "Hello sayHi" );
};

sayHi()
// Function is a value hence it can be printed 
console.log(sayHi)
let func = sayHi;
let func2 = sayHi();
console.log(`Func:> ${func}`) // function(){ console.log("Hello")}
console.log(`Func():> ${func2}`) // undefined

// Callback Functions
// In simple terms callback functions are functions that is passed to another function and
//  expect to be called back later if neccessary

// A Function Declaration can be called earlier than it is defined.
// This is due to internal algorithms. When JavaScript prepares to run the script, 
// it first looks for global Function Declarations in it and creates the functions. 
//  can think of it as an “initialization stage”.

// For example, this works:

sayHi2("Phinehas"); //return Hello, Phinehas
function sayHi2(name) {
  console.log( `Hello, ${name}` );
}
console.log("below is sayHi2")

// for function expression it will return error becos u can call a function expression
// before it declarations as seen below
// Function Expressions are created when the execution reaches them 
// sayHi("John"); // error!

let sayHi3 = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};

// Another special feature of Function Declarations is their block scope.
// In strict mode, when a Function Declaration is within a code block, 
// it’s visible everywhere inside that block. But not outside of it.

// When to choose Function Declaration versus Function Expression?
// As a rule of thumb, when we need to declare a function, the first thing to 
// consider is Function Declaration syntax. It gives more freedom in how to 
// organize our code, because we can call such functions before they are declared.

// That’s also better for readability, as it’s easier to look up function f(…) {…} 
// in the code than let f = function(…) {…};. Function Declarations are more “eye-catching”.

// …But if a Function Declaration does not suit us for some reason, or we need a 
// conditional declaration (we’ve just seen an example), then Function Expression should be used.

// Summary
// Functions are values. They can be assigned, copied or declared in any place of the code.
// If the function is declared as a separate statement in the main code flow, 
// that’s called a “Function Declaration”.
// If the function is created as a part of an expression, 
// it’s called a “Function Expression”.
// Function Declarations are processed before the code block is executed.
// They are visible everywhere in the block.
// Function Expressions are created when the execution flow reaches them.
// In most cases when we need to declare a function, a Function Declaration 
// is preferable, because it is visible prior to the declaration itself. 
// That gives us more flexibility in code organization, and is usually more readable.

// So we should use a Function Expression only when a Function Declaration 
// is not fit for the task. We’ve seen a couple of examples of that in this chapter, 
// and will see more in the future.
// Mastering Node.js Backend Testing with Mocha and Chai

// Unit Testing is important because it checks small parts of code to make sure 
// they work right and finds bugs early.

// Why Mocha and Chai ?
// Mocha >> is a feature-rich JavaScript test framework that runs on Node.js, making 
// asynchronous testing simple  and enjoyable. It provides functions that executures in 
//  a specific order, collecting test results and offering accurate reporting.

// Chai is a BDD/TDD assertion library that can be used with any JavaScript testing framework. 
// 

// Difference between Mocha and Chai

//  Mocha is a testing framework that provides the structure for organizing and running tests 
// (using describe() and it() blocks). 
// Chai is an assertion library that provides functions for verifying results 
// (like expect(), should, and assert).

// Benefits of using Mocha and Chai
// 1. Readable and expressive assertions
// Chai provides different assertion styles and syntax ooptions sthat work well with Mocha.

// 2. Support for asynchronous testing 
// Mocha handles asynchronous testing easily, letting you test asynchronous code  in Node.js 
// applications without needing extra libraries or complex setups.

// Setting Up the  Testing Environment 

/*
How do I set up and clean up test data between tests?
Mocha provides several lifecycle hooks for managing test data:

before(): Run once before all tests

beforeEach(): Run before each test

afterEach(): Run after each test

after(): Run once after all tests

*/

/* 
How should I structure my tests for better organization and maintenance?
Group related tests using describe() blocks

Use descriptive test names that clearly state the expected behavior

Follow the AAA (Arrange-Act-Assert) pattern in each test

Keep tests atomic and independent

Organize test files to mirror your source code structure
*/

/* 
What’s the difference between before, beforeEach, after, and afterEach?
‘before’ runs once before all tests, ‘beforeEach’ runs before each individual test, 
‘afterEach’ runs after each individual test, and ‘after’ runs once after all tests are complete. 
These are useful for setting up and cleaning up test data.

*/

/*
How do I test async code?
You can use async/await or return promises in your tests. Just add ‘async’ before your 
test function and use ‘await’ when calling async operations. 
Make sure to set appropriate timeouts for longer operations.
*/
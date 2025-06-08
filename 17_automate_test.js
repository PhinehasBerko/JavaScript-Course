// Why do we need tests in JavaScript?
// 1. To ensure code correctness and reliability by catching bugs early in the development process.

// 2. To facilitate code maintenance and refactoring by providing a safety net against regressions.

// 3. To improve code quality and design by encouraging modular and testable code structures.

// 4. To enhance collaboration among developers by providing clear expectations of code behavior through tests.

// 5. To support continuous integration and deployment processes by automating testing and ensuring code stability.

// ⚠️ Tests are not a substitute for good code quality, but they are an essential part of the development process 
// that helps ensure the code behaves as expected and meets requirements.

// ⚠️ When we develop something, we keep a lot of possible use cases in mind. 
// But it’s hard to expect a programmer to check all of them manually after every change. 
// So it becomes easy to fix one thing and break another one.

// Automated testing means that tests are written separately, in addition to the code. 
// They run our functions in various ways and compare results with the expected.

// This way, we can be sure that the code works as expected and that it will continue to work
// correctly after changes.
// Automated tests are scripts that run automatically to check if the code behaves as expected.

// Behavior-Driven Development (BDD) is a software development approach that emphasizes collaboration 
// between developers, testers, and non-technical stakeholders to define the behavior of 
// the application in a way that is understandable to all parties. BDD focuses on the 
// expected behavior of the application rather than its implementation details, 
// allowing for clearer communication and better alignment with business requirements.

// BDD is three things in one: tests AND documentation AND examples.

// The development flow
// The flow of development usually looks like this:

// An initial spec is written, with tests for the most basic functionality.

// An initial implementation is created.

// To check whether it works, we run the testing framework Mocha (more details soon) that runs the spec. 
// While the functionality is not complete, errors are displayed. 

// We make corrections until everything works.

// Now we have a working initial implementation with tests.

// We add more use cases to the spec, probably not yet supported by the implementations. 
// Tests start to fail.

// Go to 3, update the implementation till tests give no errors.

// Repeat steps 3-6 till the functionality is ready.

// Summary
// In BDD, the spec goes first, followed by implementation. 
// At the end we have both the spec and the code.

// The spec can be used in three ways:

// As Tests – they guarantee that the code works correctly.

// As Docs – the titles of describe and it tell what the function does.

// As Examples – the tests are actually working examples showing how a function can be used.
// With the spec, we can safely improve, change, even rewrite the function from scratch and make sure it still works right.

// That’s especially important in large projects when a function is used in many places. When we change such a function, there’s just no way to manually check if every place that uses it still works right.

// Without tests, people have two ways:

// To perform the change, no matter what. And then our users meet bugs, as we probably fail to check something manually.
// Or, if the punishment for errors is harsh, as there are no tests, people become afraid to modify such functions, and then the code becomes outdated, no one wants to get into it. Not good for development.
// Automatic testing helps to avoid these problems!

// If the project is covered with tests, there’s just no such problem. After any changes, we can run tests and see a lot of checks made in a matter of seconds.

// Besides, a well-tested code has better architecture.

// Naturally, that’s because auto-tested code is easier to modify and improve. But there’s also another reason.

// To write tests, the code should be organized in such a way that every function has a clearly described task, well-defined input and output. That means a good architecture from the beginning.

// In real life that’s sometimes not that easy. Sometimes it’s difficult to write a spec before the actual code, because it’s not yet clear how it should behave. But in general writing tests makes development faster and more stable.

// Later in the tutorial you will meet many tasks with tests baked-in. So you’ll see more practical examples.

// Writing tests requires good JavaScript knowledge. But we’re just starting to learn it. So, to settle down everything, as of now you’re not required to write tests, but you should already be able to read them even if they are a little bit more complex than in this chapter.
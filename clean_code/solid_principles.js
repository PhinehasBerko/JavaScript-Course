// Understanding SOLID Principles for Cleaner JavaScript Code

// The SOLID principles, introduced by Robert C. Martin (Uncle Bob), are five essential design rules that 
// help developer organize their code better, reduce bugs, and ease future modifications.

// What Does SOLID Stands for?

// S - Single Responsibility  Principle (SRP) > means a function should be responsible for a specific task

// O - Open / Close Principle (OCP) > 

// L - Liskov Substitution Principle (LSP) > 

// I - Interface Segregation Principle (ISP) > 

// D - Dependency Inversion Principle (DIP) > 


// Single Responsibility Principle (SRP)

// A module, class, or function should have only one reason to change.
// each function or class only do one thing; This makes your code easier to test, reuse, and maintain.

// 🚫 Bad Example that violates SRP
function processUserRegistration(userData) {
    // 1. validate input
    if (!userData.email.includes("@")) {
        throw new Error('Invalid email');
    }

    // 2. save user to DB (simulated)
    const userId = Math.floor(Math.random() * 100);

    // 3. Send welcome email (simulated)
    console.log(`Sending welcome email to ${userData.email}`);
    return userId
}

// Why this is a bad example:
// It does multiple task at the same time:
// 1. it validates the input data
// 2. save the data to the DB
// 3. send a welcome message to the user

// 👍Better way to implement same:

function validateInput (userData) {
    if (!userData.email.includes('@')) {
        throw new Error('invalid input');
    }
}

function saveToDB () {
    userId = Math.floor(Math.random() * 1000);
}

function sendWelcomeEmail (userData){
    console.log(`Sending welcome email to ${userData.email}`);
}

function userRegistration (userData) {
    validateInput(userData);
    saveToDB();
    sendWelcomeEmail(userData);
    return userId;
}
// With this, each function has one clear purpose.
// easier to test independently.
// if email logic changes, we only update welcomeUser function.

// Following SRP makes your code: 
// Easier to read and refactor
// More modular and reusable
// Less prone to bugs when requirements changes.

// NB: Even in small JavaScript projects, SRP leads to better code discipline and long-term maintainablility.
// Always ask: `Does this function do more than one thing?` If yes - split it.


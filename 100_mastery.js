// When to use switch statements instend of if statements

// 1. When you have multiple conditions to check against a single variable or expression, 
// and those conditions are discrete values (like enums or specific cases).

// 2. When the conditions are not complex and can be easily expressed as equality checks.

// 3. When you want to improve code readability and maintainability, especially when dealing with many cases.

// 4. When you want to avoid deeply nested if-else statements, which can make code harder to read.

// 5. When you want to handle a default case easily, as switch statements allow for a clear default case.

// 6. When you want to group cases that share the same logic, making it easier to manage similar conditions.

// For example, if you have a variable that can take on several specific values and you want to 
// execute different code for each value, a switch statement can be more concise 
// and clearer than multiple if-else statements.

 // Example of a switch statement :
const getDayName =(dayNumber) => {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day number";
    }
}

// When to use if statements instead of switch statements
// 1. When you have complex conditions that involve logical operators (AND, OR, NOT) or ranges of values.

// 2. When you need to evaluate conditions that are not just equality checks, 
// such as greater than, less than, or other comparisons.

// 3. When you have conditions that depend on multiple variables or expressions,
// which cannot be easily expressed in a switch statement.

// 4. When you want to handle conditions that require more complex logic, such as nested conditions or
// multiple checks that are not just discrete values.

// 5. When you want to execute different code based on a combination of conditions,
// which may not fit well into a switch statement structure.

// For example:

if (user.isAdmin && user.isActive) {
  // ...
} else if (user.isGuest) {
  // ...
}

// Summary:
// Use switch for value matching.

// Use if for logical expressions and complex conditions.

// ⚠️ Nested switch blocks reduce readability and maintainability.

//  // Avoid deeply nested switch statements; use functions or objects for better organization.

// 3 ways to create functions in JavaScript:
// 1. Function Declaration: A named function that can be called anywhere in the code after its declaration.

// Example 
function sum(a, b) {
  let result = a + b;

  return result;
}
// 2. Function Expression: An anonymous function assigned to a variable, which can be called using that variable.

// Example
let multiply = function(a, b) {
  let result = a * b;

  return result;
}

// 3. Arrow Function: A concise syntax for writing functions, introduced in ES6, which allows for shorter function expressions.

// Example
let divide = (a, b) => {
  let result = a / b;

  return result;
}


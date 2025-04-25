// Comparisons
// in JavaScript, we can compare values using comparison operators. 
// The result of a comparison is a boolean value (true or false). 
// Here are some common comparison operators:

// 1. Equal to (==): Checks if two values are equal, ignoring type.

// 2. Strict equal to (===): Checks if two values are equal, considering type.

// 3. Not equal to (!=): Checks if two values are not equal, ignoring type.

// 4. Strict not equal to (!==): Checks if two values are not equal, considering type.

// 5. Greater than (>): Checks if the left value is greater than the right value.

// 6. Less than (<): Checks if the left value is less than the right value.

// 7. Greater than or equal to (>=): Checks if the left value is greater than or equal to the right value.

// 8. Less than or equal to (<=): Checks if the left value is less than or equal to the right value.

// 9. Logical AND (&&): Returns true if both operands are true.

// 10. Logical OR (||): Returns true if at least one operand is true.

// 11. Logical NOT (!): Returns true if the operand is false and vice versa.

// 12. Nullish coalescing operator (??): Returns the right operand if the left operand is null or undefined, otherwise returns the left operand.

// 13. Optional chaining operator (?.): Allows you to access deeply nested properties without having to check if each reference in the chain is valid.

// 14. Ternary operator (?:): A shorthand for if-else statements, it evaluates a condition and returns one of two values based on the result.

// 15. Nullish assignment operator (??=): Assigns the right operand to the left operand only if the left operand is null or undefined.

// 16. Logical assignment operators (&&=, ||=): Combines logical operators with assignment, allowing you to assign a value based on a condition.

// 17. Bitwise operators (&, |, ^, ~, <<, >>): Perform bit-level operations on numbers.

// 18. Instanceof operator: Checks if an object is an instance of a specific class or constructor function.

// 19. Typeof operator: Returns the type of a variable or expression as a string.


// String comparison
// In JavaScript, strings are compared lexicographically (dictionary order).
// The comparison is based on the Unicode values of the characters in the strings.
function alert() {
    
    console.log(null == "\n0\n");
    console.log(null === +"\n0\n");
    console.log(Boolean("b")) // this will return true because "b" is a non-empty string, which is truthy in JavaScript.
    console.log(Boolean("")); // this will return false because an empty string is falsy in JavaScript.
}

alert(); // false

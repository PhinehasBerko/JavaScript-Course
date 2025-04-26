// Nullish coalescing operator '??'   
// Nullish Coalescing  operator ?? returns the first argument if 
// it’s not null/undefined. Otherwise, the second one.

// We can rewrite result = a ?? b using the operators that we already know, like this:

// result = (a !== null && a !== undefined) ? a : b;

// We can also use a sequence of ?? to select the first value from a list that isn’t null/undefined

// Comparison of ?? with ||
// The OR || operator can be used in the same way as ??, as it was described in the

// The important difference between them is that:
// || returns the first truthy value.
// ?? returns the first defined value.

// In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined. 
// They are all the same – falsy values. If any of these is the first argument of ||, 
// then we’ll get the second argument as the result.

// In practice though, we may want to use default value only when the variable is null/undefined. 
// That is, when the value is really unknown/not set.

// For Example
let height = 0;
let user;

console.log(height || 100); // 100
console.log(height ?? 100); // 0
console.log(user || "Guest") // "Guest"
console.log(user ?? "Guest") // "Guest"

// In Conclusion:
// the || checks if the 1st value of  the variable is falsy and then asigns the 2nd.
// but ?? checks if the 1st value is null/undefined (not falsy) and then asigns the 2nd.


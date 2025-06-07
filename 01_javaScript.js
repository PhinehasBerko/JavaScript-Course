// comments are written in the code for better understanding
 // is for single line comment WHILEST
 /* is for multi line comment */
//  in both cases the content is ignored by the compiler

// Use hotkeys to comment out code` 
// Ctrl + / for single line comment
// Ctrl + Shift + / for multi line comment
// nested comment are not allowed in JavaScript

"use strict"; 
// this is a directive that tells the browser to use the latest version of JavaScript
// script containing classes and modules  are not allowed to be used in strict mode this is because the classes and modules are already in strict mode
// the use of undeclared variables is not allowed in strict mode.

// A variable
// A variable is a “named storage” for data. 

// To create a variable in JavaScript, use the let keyword.

// The statement below creates (in other words: declares) a variable with the name “message”:

let message;

// There are two limitations on variable names in JavaScript:

// The name must contain only letters, digits, or the symbols such as $ and _.
// The first character must not be a digit.

// Name things right
// A variable name should have a clean, 
// obvious meaning, describing the data 
// that it stores.

// Data types
// A value in JavaScript is always of a certain type.

// There are eight basic data types in JavaScript.
// These basic data types can be grouped into a Primitive and Reference types

// Primitive Types 
//  Number, String, Boolean, Null, Undefined, BigInt, Symbol

// Characteristics of Primitive Types
// 1. Immutable ( can't be changed)
// 2. stored by value.
// 3. Directly contain the data

// Reference Types
//  Object, Array, Functions, Any user-defined objects.

// Characteristics of Reference Types
// 1. Mutable ( can be changed)
// 2. Stored by reference (memory address)
// 3. The variable holds a pointer to the actual data.

// 1. NUMBER
// number for numbers of any kind: integer or floating-point,
//  integers are limited by ±(2^53-1). (that’s 9007199254740991)
// BigInt type was recently added to the language to 
// represent integers of arbitrary length.

// the "n" at the end means it's a BigInt
// const bigInt = 1234567890123456789012345678901234567890n;

// 2. STRING
//  A string may have ZERO, one or more characters,
//  there’s no separate single-character type in JavaScript.

// 3. BOOLEAN (logical type)
// The boolean type has only two values: true and false.

// 4. NULL
// It’s just a special value which represents “nothing”,
// In JavaScript, null is not a “reference to a non-existing object” or a 
// “null pointer” like in some other languages.
// It’s just a special value which represents “nothing”,
//  “empty” or “value unknown”.

// 5. UNDEFINED
// The meaning of undefined is “value is not assigned”.

// 6. OBJECT and SYMBOL
// All other types are called “primitive” 
// because their values can contain only a single thing 
// (be it a string or a number or whatever). 
// In contrast, OBJECTs are used to store collections 
// of data and more complex entities.

// 7. The symbol type is used to create unique identifiers for objects.

// The typeof operator allows us to see which type is stored in a variable.
// A call to typeof x returns a string with the type name:

// You may also come across another 
// syntax: typeof(x). It’s the same as typeof x

// Interactions : alert, prompt, confirm
// There are three functions that allow to interact with visitors:

// alert
// The function alert shows a message and waits for the user to press “OK”.
// The syntax is: alert(message);

// prompt
// The function prompt shows a message asking the user to input text.
// It returns the text or, if Cancel button or Esc is clicked, null.

// The syntax is: result = prompt(title, [default]);

// confirm
// The function confirm shows a modal window with a question and two buttons: OK and Cancel.
// The result is true if OK is pressed and false otherwise.

// The syntax is: result = confirm(question);

// There are two limitations shared by all the methods above:

// The exact location of the modal window is determined by the browser. Usually, it’s in the center.
// The exact look of the window also depends on the browser. We can’t modify it.

// Type Conversions

// Most of the time, operators and functions automatically convert the values given to them to the right type.

// String Conversion
// String conversion happens when we need the string form of a value.

// for example: alert(value) and String(value) will do it.
// let  value = true
// alert(value); // "true"
// alert(typeof value); // string

// Numeric Conversion
// Numeric conversion happens in mathematical functions and expressions automatically.

// for example: alert( "6" / "2" ); // 3, strings are converted to numbers
// We can use the Number(value) function to explicitly convert a value to a number:

// Boolean Conversion

// The conversion rule:

// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.

// 
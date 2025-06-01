// Functions  >> are reusable block of codes. || Functions are block of codes that performs a specific task.

//  Functions help to avoid repetitions of code, improve code modularity, and enable composition.

// Examples
function greetCode(){
    console.log("Greeting to you friend")
    return(
        console.log("Greetings returned")
       
    )
}

const greetName =(name)=>{
    return(console.log(`Greetings from ${name}`))
}
greetCode()

// Annonymous Function
setTimeout(()=>{
    return(console.log("annonymous function calling after 2sec"))
},2000)

greetName("Phinehas")

// Function Declaration
function greet(name) {
  return `Hello, ${name}`;
}

// Function Expression
const greet2 = function(name) {
  return console.log(`Hi, ${name}`);
}

// Arrow Function (ES6)
const greet3 = (name) => console.log(`Hey, ${name}`);

greet2("Dely")
greet3("Victor")

// 💪 Exercise:
// Write a function isEven(number) that returns true if a number is even.

// Write a function capitalize(str) that capitalizes the first letter of a string.

const exerciseOne =((number => number % 2 === 0) )
// const exerciseTwo =(str) =>{
//     return(console.log(`${str.toStringCapitalize()} is the capitalized string`))
// }
console.log(exerciseOne(21))
console.log(exerciseOne(35))
console.log(exerciseOne(42))
console.log(exerciseOne(74))

// exerciseTwo("daddy")
// exerciseTwo("mummy")
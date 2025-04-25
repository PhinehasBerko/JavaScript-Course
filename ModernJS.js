 const name = "Johnn";
//  console.log(name.startsWith("J"))
// console.log(name.endsWith("hn"))
// console.log(name.includes("ohn"))
// console.log(name.repeat("nn"))

// Functions
// Arrow Functions (ES6)
const add =(a,b) =>a+b;
console.log(add(5,6))

const sum =(...nums) =>{return nums.reduce((a,b) => a+b,0)};

console.log(`SUM of the numbers: (2,4,5,6,34):> ${sum(2,4,5,6,34)}`)

// Spread Operator
const arr = [23,24];
console.log([...arr,25])
console.log({...arr,"3":26})

// NEW DATA STRUCTURES
console.log("NEW DATA STRUCTURES")
const m = new Map();
m.set('a', 1);
m.set(1, 'one');

console.log(m)

// ITERATORS & GENERATORS
for(let char of "Hello"){
    // console.log(char)
}

function* gen() {
  yield 1;
  yield 2;
}
// console.log(gen.apply)

// Nullish Coalescing
let user = {
  name: null,
  age: undefined,
  city: "Lagos"
};
const name1 = user.name ?? "Anonymous";
   user.age ??= 30;
console.log(user.age)
console.log(name1)

console.log("************************Bitwise*************************")
// console.log(5&3)
// console.log(5|3)
// console.log(5^3)
// console.log(~5)
console.log(5<<1)
console.log(5<<2)
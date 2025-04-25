// OBJECTS >> are variables that store key-value pair values

// Example:

let user ={
    firstName: "Phinehas",
    lastName : "Berko",
    action: () =>{
        console.log("I can walk")
    },
    greet(){
        console.log("I salute everyone")
    }
}

user["email"] = "phinehas@gmail.com"
// console.log(user)


for(let key in user){
    console.log(`key: ${key} with value: ${user[key]} \n`)
}

// 💪 Exercise:
// Create an object person with keys: name, job, age.

// Add a method introduce() that logs a sentence using the object’s values.
const person = {
    name: "Serwaa",
    age: 8,
    job: "student",
    introduce(){
        console.log(`My name is ${person.name}, I am ${person.age} ago and I am a ${person.job}`)
    }
}
console.log(person.introduce())
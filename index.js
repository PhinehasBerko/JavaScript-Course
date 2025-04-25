// var => is a function scope meaning it can be
// accessed from anywhere in the function.

// let => is a block scope meaning it can only be
// accessed in the [for loop block where it's defined]
//  + the let variable can be reasigned. 

// const => is a block  but can not be reasigned

function showVar(){
    for(var i = 0; i <5 ; i++){
        console.log(i)
    }
    console.log(i)
}
showVar()
console.log("break to next coding example 1")
function showLet(){
    for(let j = 2; j<=5 ; j++){
        console.log(j)
    }
}
showLet()

console.log("break to next coding example 2")

// OBJECTS and HOW to ACCESS IT.
// Object is a collection of key value pairs.
const person = {
    name: String,
    walk : function(){    
    }, // this a method
    talk(){} // and this too
}
// To access the properties of the object
person.name = "Phinehas"
const targetMember = "name"

// THIS keyword

console.log("break to next coding example 3")
const persons = {
    name: "Kofi",
    walk(){
        console.log(this)
    }
}
persons.walk()

const walk = persons.walk.bind(person)
walk()

console.log("break to next coding example 4")

// Arrow Functions
const jobs = [
    {id:1, isActive: true},
    {id:2, isActive: false},
    {id:3, isActive: true},
    {id:4, isActive: false},
    {id:5, isActive: true}
]
const inActiveJobs = jobs.filter(function(job){return !job.isActive})
const activeJobs = jobs.filter(job => job.isActive)

console.log("inActiveJobs:",inActiveJobs)
console.log("activeJobs:",activeJobs)

console.log("break to next coding example 5")
// Array [map]
console.log("Maps: ")
jobs.map(job =>console.log(job.isActive))

// Object Destructuring
const address = {
    street: "",
    city:"",
    country: ""
}
const {street,city,coutry} = address
const {street: st} = address

console.log("break to next coding example 6")
// The Spreed operator
const first = [1,2,3]
const second = [4,5,6,7]

const combined = first.concat(second)
const bestCombined = [...first,...second]
console.log("Best Combined:",bestCombined)
console.log("Combined:",combined)

const student1 = {
    name: "Victor",
    class:" stage 1"
}
const student2 = {
    name: "Deligent",
    class: "stage 3"
}

const students = {...student1, ...student2, location:"Kumasi"}

console.log("Student Object: ", students)

class Person {
     constructor(name){
        this.name = name
        
     }
     walk(){
            console.log("I am walking")
        }
    }
    
let Kofi = new Person

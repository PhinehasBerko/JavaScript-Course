// Object Oriented Programming (OOP) Concepts
// OOP > is a way of writing code by organizing it into objects - just like real-world things.

// Each object has:
// Properties (data)
// Methods (behaviours or functions)

// OOP helps you build:
// Reusable code 
// Organized code 
// Easier to debug programs

// 4 Main Pillars of OOP

// 1. Encapsulation
// Encapsulation is a way to hide internal details and only expose what's neccessary.
// Eg. just like how a driver start a car without having to know the internal details of how the engine works.

// Example 1:
class Car {
    constructor() {
        this.speed = 0;
    }

    accelerate() {
        this.speed += 10;
    }

    getSpeed() {
        return this.speed;
    }
}

const car = new Car();
car.accelerate();
console.log(`Speed Level - ${car.getSpeed()}`);

// Example 2: using the private fields (#)
class BankAccount  {
    
    #balance = 0;
    

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance () {
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(1200);
account.deposit(120);
console.log("Account Balance: ",account.getBalance());

// Example 3: Controlling how properties are set;

class Person {
    #age;
     
    setValue (value) {
        if (value < 0) {
            throw new Error("Invalid value");
        }
        this.#age = value;
    }
    getAge () {
        return this.#age;
    }
}

const person = new Person();
console.log(person.setValue(23));
console.log(`I am ${person.getAge()} years old`);

// Exx 
// class User {
//     #name;
//     #age;


//     setName ()
       

// }
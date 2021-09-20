// Constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);

    // Methods
    // this.getBirthYear = function () {
    //     return this.dob.getFullYear();
    // }

    // this.getFullName = function() {
    //     return `${this.firstName} ${this.lastName}`;
    // }
// }

// Instantiate a object
// const person1 = new Person('John', 'Doe', '10 June, 1994');
// console.log(person1.dob.getHours);

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

// Adding the function only to the prototype
// Person.prototype.getFullYear = function() {
//     return this.dob.getFullYear();
// }
// console.log(person1.getFullYear());

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// Both functional OOP and classes will give the same result but the function will be in the prototype constructor.


// Classes 
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate a object
const person1 = new Person('John', 'Doe', '10 June, 1994');

console.log(person1.getBirthYear());
console.log(person1.getFullName());


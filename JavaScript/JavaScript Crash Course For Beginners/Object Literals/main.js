// -----------------------------------
//             OBJECT LITERALS 
// -----------------------------------
const person = {
    firstName: 'Lyle',
    lastName: 'Bone',
    age: 32,
    hobbies: ['music', 'sports', 'food'],
    address: {
        street: '45 main street',
        city: 'citynever',
        country: 'south island'
    }
}
// Accesing a single pair in the object 
// console.log(person.lastname)

// Accessing multiple pairs in the object
// console.log(person.firstname, person.lastname);

// Accessing data from a array in an object 
// console.log(person.hobbies[1]);

// Accessing data from a object embeded in an object
// console.log(person.address.street);

// Destructuring / using the object data and converting it into variables - the address is a embeded object 
const {firstName, lastName, address:{city}} = person;
console.log(city);

// Adding properties to the object 
person.email = 'johndoe@gmail.com';
console.log(person);

const todos = [
    {
        id: 1,
        text: 'drink water',
        isCompleted: true
    },
    {
        id: 2,
        text: 'exercise',
        isCompleted: true
    },
    {
        id: 3,
        text: 'study',
        isCompleted: false
    },
]

// grabbing data from an array
// console.log(todos[1].text);

// Converting an array to JSON so we can send the data to a server
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
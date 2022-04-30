// -----------------------------------------------------------------------------------------------------------
//                         CONSOLE METHODS 
// -----------------------------------------------------------------------------------------------------------
// console.log('Hello World');
// console.error('This is an error message');
// console.warn('This is a warning message');

// -----------------------------------------------------------------------------------------------------------
//                         VARIABLES - var, let, const
// -----------------------------------------------------------------------------------------------------------
// let age = 30;
// age = 31;

// console.log(31);

// -----------------------------------------------------------------------------------------------------------
//                         DATA TYPES - string, numbers, boolean, null, undefined
// -----------------------------------------------------------------------------------------------------------
// const name = 'John';
const age = 32;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z; 

// console.log(typeof x);

// ************************ CONCATENATION **************************** 
// Template literals 
// console.log(`My name is ${name} and my age is ${age}.`);

// *************************** STRING PROPERTIES *********************
// const s = 'Hello World';

// console.log(s.length); // returns 11 
// console.log(s.toUpperCase()); // returns HELLO WORLD
// console.log(s.toLowerCase()); // returns hello world
// console.log(s.substring(0,5)); // returns Hello
// console.log(s.split('')); // returns [ "H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d" ]
// Use case for the split method
// const technologies = 'HTML, JS, CSS, PHP';
// console.log(technologies.split(',')); // returns an array [ "HTML", " JS", " CSS", " PHP" ]

// -----------------------------------------------------------------------------------------------------------
//                         ARRAYS - VARIABLES THAT HOLD MULTIPLE VALUES
// -----------------------------------------------------------------------------------------------------------
//const numbers = new Array(1,2,3,4,5); // Using the constructor to create an array (uses 'new' keyword)
// const fruits = ["apples", "oranges", "tomatoes"];

//fruits[3] = 'grapes';

// fruits.push('mangoes'); // Adding mangoes onto the end of the fruits array 
// fruits.unshift('strawberries'); // Adding strawberries to the beginning of the array
// fruits.pop(); // Removes the last item in the array 

// console.log(Array.isArray(fruits)); // Checking to see if variable is an array 
// console.log(fruits.indexOf('oranges')); // Returns the index of the orange 
//console.log(fruits[1]);
// console.log(fruits);

// -----------------------------------------------------------------------------------------------------------
//                         OBJECT LITERALS
// -----------------------------------------------------------------------------------------------------------
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 32,
//     hobbies: ["music", "movies", "sport"],
//     address: {
//         street: '50 main street',
//         city: 'Boston',
//         state: 'WC'
//     }
// };

// console.log(person.address.city); // returns the address property

// // DESTRUCTURING
// const {firstName, lastName, address: {city}} = person;
// console.log(city);

// person.email = 'john@gmail.com'; // Adding onto the person object 
// console.log(person); // returns the entire object 

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true,
//     },
//     {
//         id: 2,
//         text: 'Homework',
//         isCompleted: false,
//     },
//     {
//         id: 3,
//         text: 'Cook supper',
//         isCompleted: true,
//     },
// ];

// console.log(todos[1].text); // Returns the text property in the second array

// console.log(todos); // Returns the entire todos object

// const todoJSON = JSON.stringify(todos); // converts the todos object literal into JSON format
// console.log(todoJSON);


// const personJSON = JSON.stringify(person); // converts the todos object literal into JSON format
// console.log(personJSON);

// -----------------------------------------------------------------------------------------------------------
//                         LOOPS
// -----------------------------------------------------------------------------------------------------------

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Homework',
        isCompleted: false,
    },
    {
        id: 3,
        text: 'Cook supper',
        isCompleted: true,
    },
];


// FOR LOOP

// for (let index = 0; index < 10; index++) {
//     console.log(index);
    
// }
//  WE CAN USE THE FOR LOOP TO LOOP THROUGH THE ARRAY
// for (let index = 0; index < todos.length; index++) {
//     console.log(todos[index].text);
// }

// WHILE LOOP
// let index = 0;
// while (index < 10) {
//     console.log(index);
//     index++;
// }

// FOR OF LOOP
// for (let todo of todos) {
//     console.log(todo.text);
// }

// FOR EACH 
// todos.forEach(function(todo) {
//     console.log(todo.text);
// });

// // MAP - RETURNS A NEW ARRAY 
// const todoText = todos.map(function(todo) {
//     return todo.text;
// });

// // FILTER - AND WE CAN CHAIN ON OTHER ARRAY METHODS AS WELL
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted = true;
// }).map(function(todo){
//     return todo.text;
// });
// // 1. Filter all the todos that have a completed set to true
// // 2. Only return those todos with their relevant text
// console.log(todoCompleted);

// -----------------------------------------------------------------------------------------------------------
//                         CONDITIONALS
// -----------------------------------------------------------------------------------------------------------

// const x = 1;

// if(x === 10) {
//     console.log('x is 10');
// } else if(x > 10) {
//     console.log('x is greater than 10');
// } else {
//     console.log('x is not greater than 10');
// }

//  TERNARY OPERATOR
// const number = 101;

// const color1 = number > 10 ? 'red' : 'blue';
// const color2 = number > 100 && 'red';
// console.log(color1, color2);

// console.log(color);

//  SWITCHES

// const color = 'blue';

// switch (color) {
//     case 'red':
//         console.log('color is red');
//         break;

//     case 'blue':
//         console.log('color is blue');
//         break;

//     default: 
//         console.log('color is not defined of the two');
// }

// let x = "0";
// let text;

// switch (x) {
//   case "0":
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// } 

// console.log(text);

function addNums(num1 = 1, num2 = 1) {
   return num1 + num2;
}

console.log(addNums());

//  USING ARROW SYNTAX FOR THE ABOVE FUNCTION
const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(5,5));
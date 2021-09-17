// Var, let, const

// Don't use var as it is globally scoped
// let and const have a block-level scope


// -----------------------------------
//               LET 
// -----------------------------------

// Let - You can reassign values
// let age = 30;
// age = 32;

// console.log(age);

// -----------------------------------
//               CONST 
// -----------------------------------
// Const - when you know you are not going to reassign the value
// const gender = "male";
// gender = "female"; This will throw a type error in the console

// console.log(gender);

// -----------------------------------
//               DATA TYPES
// -----------------------------------
/*
1. String
2. Numbers
3. Boolean
4. Null
5. Undefined
6. Symbol - ES6
*/
const name = "John";
const age = 30;
// const isCool = true;
// const rating = 4.5;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof z)

// Concatenation - strings
// 1. This is the old way 
console.log("My name is "+ name + ' and I am ' + age + ' years of age.'); 
// 2. Template strings / literals
console.log(`My name is ${name} and I am ${age} years of age.`);

// String properties and methods
const s = "Hello World";
const category = "technology, it, code, programming";
/**
 1. length
 2. toUpperCase()
 3. toLowerCase()
 4. substr(start, end)
 5. split() - convert strings to arrays

 ** You can chain these methods on each other - i.e. console.log(s.substr(0,5).toUpperCase());
*/
console.log(category.split(", "));
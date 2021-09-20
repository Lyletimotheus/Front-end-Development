// -----------------------------------
//             LOOPS
// -----------------------------------
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


// -----------------------------------
//             FOR LOOPS
// -----------------------------------
// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// -----------------------------------
//             WHILE LOOP
// -----------------------------------
// Variable is set outside the loop
// let i = 0;
// while(i<10){
//     console.log(`While loop Nuber: ${i}`);
//     i++;
// }

// -----------------------------------
//             LOOPING OVER ARRAYS
// -----------------------------------

// -----------------------------------
//             FOR LOOP - ARRAY
// -----------------------------------

// for (i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }

// -----------------------------------
//             FOR OF LOOP - ARRAY
// -----------------------------------
// for(let todo of todos) {
//     console.log(todo.id);
// }

// -----------------------------------
//             FOREACH LOOP - ARRAY
// -----------------------------------
/*
    1. forEach takes in a call back function
    2. call back function takes in a parameter / variable that you want to use as each item
    3. paramers: currentvalue, index, array
*/
//    todos.forEach(function(todo) {
//         console.log(todo);
//    });

/* todos.forEach((individualArrayItem, indexofIndivualArrayItem, wholeArrayItem) => {
    // console.log(individualArrayItem);
    // console.log(individualArrayItem.text);
    if(indexofIndivualArrayItem == 2){
        console.log(individualArrayItem.text);
    }
});
*/


// -----------------------------------
//             MAP - ARRAY
// -----------------------------------
// 1. Map returns an array

const todoText = todos.map(function(todo){
    return todo.text; // Returns a new array with just the text pair value
});

const todoId = todos.map(function(todo) {
    return todo.id;
});

console.log(todoId[0]); // Here we return the first id of the array

// console.log(todoText[1]);



// -----------------------------------
//             FILTER - ARRAY
// -----------------------------------
// If we want to return todos that are completed 
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})
// We can chain on other array methods as well
console.log(todoCompleted);
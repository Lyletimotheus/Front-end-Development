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
*/
   todos.forEach(function(todo) {
        console.log(todo.text);
   });
// -----------------------------------
//             MAP - ARRAY
// -----------------------------------

// -----------------------------------
//             FFILTER - ARRAY
// -----------------------------------
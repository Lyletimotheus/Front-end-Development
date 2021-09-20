// Selecting elements from the DOM
/*
    Ones we should use:
    1. Queryselector()
    2. QueryselectorAll()
    3. GetElementById()
*/

// Single element selectors
const form = document.getElementById('my-form');
// console.log(form);

// We can use querySelector to select just one of that element in the DOM
// console.log(document.querySelector('.container'));


//Multiple element selectors
// console.log(document.querySelectorAll('.item')); Here we can pass a tag, class or and ID
// console.log(document.getElementsByTagName('li'));

// Loop through items 
const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// SAME AS ABOVE FUNCTION

items.forEach(function(item) {
    console.log(item);
}); 
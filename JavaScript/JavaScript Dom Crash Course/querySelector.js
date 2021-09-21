// QuerySelector - Selecting one element
let header = document.querySelector('#main-header');
header.style.borderBottom = '4px solid red';

let input = document.querySelector('input');
input.value = 'Hello World';

// Here we are changing the input type and letting it equal to submit its value 
let submit = document.querySelector('input[type="submit"]');
submit.value = 'Success';

let item = document.querySelector('.list-group-item');
item.style.color = 'red';

let lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

// We can use the nth child selector as well
let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'orange';

// Query Selector All
let titles = document.querySelectorAll('.title');
// We can access it like an array because it is a nodelist
titles[1].textContent = 'Content has been changed';

let odd = document.querySelectorAll('li:nth-child(odd)');

for(let i = 0; i < odd.length; i++ ) {
    odd[i].style.backgroundColor = 'green';
}
// Getting all the list items with the same class name
let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]); // Here we are accessing the second list-item

// Changing the text of the second list item
items[1].textContent = 'This is a changed list item';

// Changing the style of the second list-item
items[1].style.color = 'red';
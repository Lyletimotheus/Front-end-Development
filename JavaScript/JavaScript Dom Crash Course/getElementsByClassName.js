// Getting all the list items with the same class name
let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]); // Here we are accessing the second list-item

// Changing the text of the second list item
items[1].textContent = 'This is a changed list item';

// Changing the style of the second list-item
items[1].style.color = 'black';
items[1].style.backgroundColor = 'yellow';

// Adding styles to all of items in the ul - 
// 1. We need to loop through the HTML collection

for(let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
}
var itemList = document.querySelector('#items');
// Parent Node Property
// console.log(itemList.parentNode); // Returning the parent node of that child list element
// You can use the parent node as a selector - here it will change the parent node
itemList.parentNode.style.backgroundColor = 'red';

// Changing parent nodes on 
// console.log(itemList.parentNode.parentNode);

// Parent Element is the same as parent Node
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'red';
// console.log(itemList.parentElement.parentElement);

// Childnodes - try not to use it as it looks at the whitespace and linebreaks
// console.log(itemList.childNodes);

// Children - use this instead of childnodes
// console.log(itemList.children);

// First child property - This property also considers whitespace and linebreaks
// console.log(itemList.firstChild);

// First Element Child
// console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'ITEM 1';

// Last Child
console.log(itemList.lastChild);
// last Element Child
// console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'ITEM 4';

// Siblings
console.log(itemList.nextSibling);
// NextElementSibling
console.log(itemList.nextElementSibling);

// Previous Sibling
console.log(itemList.previousSibling);
// Previous Element Sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'blue';

// Creating elements

// Create a div 
var newDiv = document.createElement('div');
// Adding a class name to the new div
newDiv.className = 'hello';
// Adding a ID
newDiv.id = 'Hello1';
// Adding a attribute 
newDiv.setAttribute('title', 'Hello Div');
// Create a text node
var newDivText = document.createTextNode('Hello World');
// Add text node to div
newDiv.appendChild(newDivText);
// Adding our div to the DOM
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);

// Inserting the content before the container
container.insertBefore(newDiv, h1);

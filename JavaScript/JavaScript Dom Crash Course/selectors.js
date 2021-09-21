// GetElementById
// console.log(document.getElementById('header-title'));

// Add it as a variable so that we can access the properties of that element  
let headerTitle = document.getElementById('header-title');
console.log(headerTitle);

// Changing content of an element
headerTitle.textContent = "Hello World";

// Section Title
let sectionTitle = document.querySelector('.title');
sectionTitle.innerText = "Goodbye World";

// textContent pays attention to styling while innerText does not at all

// Using innerHTML to change content
let listItem1 = document.querySelector('.list-group-item');
listItem1.innerHTML = '<h4>Item 1</h4>';
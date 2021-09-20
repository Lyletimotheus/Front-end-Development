const ul = document.querySelector('.items');

// Remove the ul elements from the DOM
// ul.remove();

// Removing the last child element of the ul 
// ul.lastElementChild.remove();

// Edit content - first and second child elements
ul.firstElementChild.textContent = 'Hello Item 1';
ul.children[1].innerText = 'Hello Item 2';
ul.lastElementChild.innerHTML = '<h1>Hello Item 3</h1>';

// Changing the style of button using JavaScript 
const btn = document.querySelector('.btn');
btn.style.background = 'red';
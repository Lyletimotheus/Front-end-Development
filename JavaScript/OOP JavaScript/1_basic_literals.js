// Strings are called primitive
const s1 = "Hello";
console.log(typeof s1);

const s2 = new String("World");
console.log(typeof s2);

// Window Object
// console.log(window);
// window.alert("This is an alert from the window object!");
// console.log(navigator.appCodeName);

// Book Object Literal
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    category: [
        'Romance'
    ]
}
console.log(book1.category[0]);
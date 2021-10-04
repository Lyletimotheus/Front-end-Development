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
    ],
    getSummary: function() {
        // this keyword refers to the book object
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

}
// Getting the key pair values of the object literal
console.log(Object.keys(book1));
console.log(Object.values(book1));

// console.log(book1.getSummary());
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary - this will store in the prototype instead of the object itself
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
};

// Create a magazine constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}
// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate magazine object 
const Mag1 = new Magazine('Mag One', 'John Doe', '2021', 'October');

// Use Magazine constructor to change it under prototype
Magazine.prototype.constructor = Magazine;

console.log(Mag1);
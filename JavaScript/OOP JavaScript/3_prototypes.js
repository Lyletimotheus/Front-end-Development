// Is basically a function
function Book(title, author, year) {
    // console.log('Book instantiated');
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary - this will store in the prototype instead of the object itself
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
};

// getAge - this will give us the number of years that has passed since the book was created
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old.`;
};

// Revise - change the year
Book.prototype.revise = function(newYear) {
    this.year = newYear; // Take what the new revised year we pass in as the new updated year of the book
    this.revised = true;
}


// Instantiate an object
const book1 = new Book("Book One", "John Doe", "1843");
const book2 = new Book("Book Two", "Jane Doe", "1987");

book2.revise(2021); // Here we add the revised year as the book has gone an update
console.log(book2);


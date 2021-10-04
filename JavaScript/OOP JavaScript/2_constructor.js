// Is basically a function
function Book(title, author, year) {
    // console.log('Book instantiated');
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
// Instantiate an object
const book1 = new Book("Book One", "John Doe", "1843");
const book2 = new Book("Book Two", "Jane Doe", "1987");

console.log(book1.getSummary());
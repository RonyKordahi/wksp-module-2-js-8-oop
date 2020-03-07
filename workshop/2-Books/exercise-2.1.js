// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//      - title, genre, author, read, startReadDate, endReadDate
// Declare the books as book1, book2, book3, book4, book5
//
// Remember that it isn't necessary to pass arguments for all of the parameters.
// if you haven't read the book, there should not be a startReadDate or endReadDate
//
// Console.log them to verify that all is working.

class Book {
    constructor(title, genre, author, read, startReadDate, endReadDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.startReadDate = startReadDate;
        this.endReadDate = endReadDate;
    }
}

let book1 = new Book("The Hitchhiker's Guide to the Galaxy", "Science fiction/comedy", "Douglas Addams", "read", "July 8 2000", "August 8 2000");
let book2 = new Book("Awesome title", "Awesome genre", "Awesome Author", "Definitely read", "Yesterday", "Also yesterday");
let book3 = new Book("The most boring book", "documentary", "Boring McBoring", "Not read", "N/A", "N/A");
let book4 = new Book("A book", "Fantasy", "A person", "read", "20/02/18", "20/02/19");
let book5 = new Book("Last one", "Fantasy", "Rony Kordahi", "read", "Feb 12 2020", "Feb 12 2020");

console.log(book1, book2, book3, book4, book5);
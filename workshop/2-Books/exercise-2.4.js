// From 2.3
// Copy over all of the code from 2.3...


// Exercise 2.4
// We need methods in our BookList start reading and finish reading books
//      - startReading accepts a title parameter. (The book should already be in your books array.
//          - set currentlyReading
//          - set the startReadDate in the book object to new Date(Date now());
//      - finishREading accepts a title parameter.
//          - set lastRead to title
//          - update the book's object accordingly.
//          - update the read and unread count accordingly.

// console.log(homeLibrary) when you're done adding, starting and finishing books.
// Make sure that your changes are reflected in the homeLibrary.

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

class BookList {
    constructor() {
        this.booksread = 0;
        this.booksUnread = 0;
        this.books = [];
        this.lastBookRead = null;
        this.CurrentBookReading = null;
        this.UpNext = null;
    }

    add = (book) => {
        this.books.push(book);
        if (book.read === "read") {
            this.booksread += 1;
        }
        else {
            this.booksUnread += 1;
        }
    }

    startReading = (title) => {
        this.CurrentBookReading = title;
        this.books.startReadDate = new Date(Date. now());
    }

    finishReading = (title) => {
        this.lastBookRead = title;
        this.booksUnread -= 1;
        this.booksread += 1;
    }
}

let homeLibrary = new BookList;
homeLibrary.add(new Book("The Shining", "Horror", "Stephen King", "unread", "N/a", "N/A"));
homeLibrary.add(new Book("The Hitchhiker's Guide to the Galaxy", "Sci-fi/comedy", "Douglas Addams", "read", "July 8 2000", "August 8 2000"));

homeLibrary.startReading("The Shining");
console.log(homeLibrary);

homeLibrary.finishReading("the Shining");
console.log(homeLibrary);
// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2


// Exercise 2.3
// We need a method in our BookList to make adding books possible.
//  - create an add method to add books to the library.
//      - when you add a book, it should increase the read, or unread count.
//  - use the add method to add in a few books.
//      - you can call new Book without declaring it as variable.
//      - e.g. homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));

// Once you have added a few books, console.log(homeLibrary) to see if all is well.

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
        if (book.read === "read") {
            this.booksread += 1;
        }
        else {
            this.booksUnread += 1;
        }
    }
}

let homeLibrary = new BookList;
homeLibrary.add(new Book("The Shining", "Horror", "Stephen King", "unread", "N/a", "N/A"));
homeLibrary.add(new Book("The Hitchhiker's Guide to the Galaxy", "Sci-fi/comedy", "Douglas Addams", "read", "July 8 2000", "August 8 2000"));
console.log(homeLibrary);
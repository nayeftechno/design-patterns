const isbnNumbers = new Set();
const bookList = [];

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

const createBook = (title, author, isbn) => {
  if (isbnNumbers.has(isbn)) {
    return;
  } else {
    isbnNumbers.add(isbn);
    return new Book(title, author, isbn);
  }
};

const addBook = (title, author, isbn, year) => {
  const book = {
    ...createBook(title, author, isbn),
    year,
  };
  bookList.push(book);
  return book;
};

addBook("Harry Potter", "JK Rowling", "AB123", "2000");
addBook("Harry Potter", "JK Rowling", "AB123", "2001");
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", "2002");
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", "2003");
addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", "2020");

console.log(`Number of books :${isbnNumbers.size}`);
console.log(`Number of copies :${bookList.length}`);

console.log(bookList);

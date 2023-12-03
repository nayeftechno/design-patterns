const isbnNumbers = new Set();
const bookList = [];

class Book {
  constructor({ title, author, isbn }) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

function createBook({ title, author, isbn }) {
  if (isbnNumbers.has(isbn)) return;

  isbnNumbers.add(isbn);
  return new Book({ title, author, isbn });
}

function addBook({ title, author, isbn, year }) {
  const book = {
    ...createBook({ title, author, isbn }),
    year,
  };
  bookList.push(book);
}

addBook({ title: "title", author: "author", year: "2023", isbn: "100" });
addBook({ title: "title", author: "author", year: "2023", isbn: "100" });
addBook({ title: "title", author: "author", year: "2023", isbn: "100" });

addBook({ title: "title", author: "author", year: "2023", isbn: "200" });
addBook({ title: "title", author: "author", year: "2023", isbn: "200" });

console.log(`Number of books: ${isbnNumbers.size}`);
console.log(`Number of copies: ${bookList.length}`);

export default {};

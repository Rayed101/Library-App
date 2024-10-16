const myLibrary = [];

const container = document.getElementById("div1");

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pageCount = document.getElementById("page-count").value;
  const readStatus = document.getElementById("read-status-1").checked;

  const newBook = new Book(title, author, pageCount, readStatus);

  myLibrary.push(newBook);
  displayBooks();
}

function Book(newTitle, newAuthor, newPageCount, newReadStatus) {
  this.newTitle = newTitle;
  this.newAuthor = newAuthor;
  this.newPageCount = newPageCount;
  this.newReadStatus = newReadStatus;
}

function displayBooks() {
  container.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.textContent = `Title: ${book.newTitle}, Author: ${book.newAuthor}, Pages: ${book.newPageCount}, Read: ${book.newReadStatus}`;
    container.appendChild(bookDiv);
  });
}

let submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  addBookToLibrary();
});

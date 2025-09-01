const container = document.querySelector(".container");
const newBookBtn = document.querySelector("button");

const myLibrary = [
    {
        title: "Harry Potter",
        author: "JK Rowling",
        pages: "300"
    },
    {
        title: "Lord of the Rings",
        author: "J.R.R Tolkien",
        pages: "600"
    }
];

function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
}

function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);
    book.id = crypto.randomUUID();
    myLibrary.push(book);
    displayLibrary(myLibrary);
}

function displayLibrary(library) {
    for(let i = 0; i < library.length; i++) {
        const book = library[i];
        const card = document.createElement("div");
        card.classList.add("card")
        card.textContent = `
        ${book.title}
        by ${book.author}
        is ${book.pages} pages long.`
        container.appendChild(card);
    }
}

newBookBtn.addEventListener("click", () => {
    const title = prompt("Enter a book");
    const author = prompt("Enter the author");
    const pages = prompt("Enter the page length");

    addBookToLibrary(title, author, pages);
})

displayLibrary(myLibrary)
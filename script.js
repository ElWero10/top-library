const container = document.querySelector(".container");
const newBookBtn = document.querySelector("button");
const showLibraryBtn = document.querySelector(".show");
const clearBtn = document.querySelector(".clear");

const getInfo = document.querySelector(".get-info");
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#page-count");
const bookRead = document.querySelector("#read-status");
const addBookBtn = document.querySelector("#submit-btn");

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

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    book.id = crypto.randomUUID();
    myLibrary.push(book);
    displayLibrary(myLibrary);
}

function displayLibrary(library) {
    container.innerHTML = "";
    
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
    getInfo.showModal();
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    bookRead.value = "";
})

showLibraryBtn.addEventListener("click", () => {
    displayLibrary(myLibrary);
})

clearBtn.addEventListener("click", () => {
    myLibrary.splice(0, myLibrary.length);
    displayLibrary(myLibrary);
})

addBookBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = bookTitle.value;
    const author = bookAuthor.value;
    const pages = bookPages.value;
    const read = bookRead.value === "Read";
    if(title && author && pages) {
        addBookToLibrary(title, author, pages, read);
    }
    getInfo.close();
})
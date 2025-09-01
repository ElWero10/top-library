const container = document.querySelector(".container");
const newBookBtn = document.querySelector("button");
const showLibraryBtn = document.querySelector(".show");
const clearBtn = document.querySelector(".clear");
const getInfo = document.querySelector(".get-info");

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

    // const title = prompt("Enter a book");
    // const author = prompt("Enter the author");
    // const pages = prompt("Enter the page length");
    // const read = promp("Have you read this book?")
    // if(title && author && pages) {
    //     addBookToLibrary(title, author, pages);
    // }
})

showLibraryBtn.addEventListener("click", () => {
    displayLibrary(myLibrary);
})

clearBtn.addEventListener("click", () => {
    myLibrary.splice(0, myLibrary.length);
    displayLibrary(myLibrary);
})
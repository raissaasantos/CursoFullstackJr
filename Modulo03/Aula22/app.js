class Book {
    constructor(year, month, day, genre, name, rate) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.genre = genre;
        this.name = name;
        this.rate = rate;
    }

    validateData() {
        for (let i in this) {
            if (this[i] === undefined || this[i] === "") {
                return false;
            }
        }
        return true;
    }
}

class Database {
    constructor() {
        const id = localStorage.getItem('id');
        if (id === null) {
            localStorage.setItem('id', 0);
        }
    }

    loadBooks() {
        const books = Array();
        const id = localStorage.getItem('id');
        for (let i = 1; i <= id; i++) {
            const book = JSON.parse(localStorage.getItem(i));
            if (book === null) {
                continue;
            }
            book.id = i;
            books.push(book);
        }
        return books;
    }

    createBook(book) {
        const id = getNextId();
        localStorage.setItem(id, JSON.stringify(book));
        localStorage.setItem('id', id);
    }

    removeBook(id) {
        localStorage.removeItem(id);
    }

    searchBooks(book) {
        let filteredBooks = Array();
        filteredBooks = this.loadBooks();

        if (book.year !== '') {
            filteredBooks = filteredBooks.filter(b => b.year === book.year);
        }
        if (book.month !== '') {
            filteredBooks = filteredBooks.filter(b => b.month === book.month);
        }
        if (book.day !== '') {
            filteredBooks = filteredBooks.filter(b => b.day === book.day);
        }
        if (book.genre !== '') {
            filteredBooks = filteredBooks.filter(b => b.genre === book.genre);
        }
        if (book.name !== '') {
            filteredBooks = filteredBooks.filter(b => b.name === book.name);
        }
        if (book.rate !== '') {
            filteredBooks = filteredBooks.filter(b => b.rate === book.rate);
        }

        return filteredBooks;
    }
}

const database = new Database();

function getNextId() {
    const nextId = localStorage.getItem('id');
    return parseInt(nextId) + 1;
}

function registerBook() {
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;
    const genre = document.getElementById('genre').value;
    const name = document.getElementById('name').value;
    const rate = document.getElementById('rate').value;

    const book = new Book(year, month, day, genre, name, rate);

    if (book.validateData()) {
        database.createBook(book);
    }
}

function loadBooks(books) {
    if (books === undefined) {
        books = database.loadBooks();
    }

    const listBooks = document.getElementById('listBooks');
    listBooks.innerHTML = '';

    books.forEach((b) => {
        const row = listBooks.insertRow();
        row.insertCell(0).innerHTML = `${b.day}/${b.month}/${b.year}`;
        row.insertCell(1).innerHTML = b.genre;
        row.insertCell(2).innerHTML = b.name;
        row.insertCell(3).innerHTML = b.rate;

        const btn = document.createElement('button');
        btn.className = 'btn btn-danger';
        btn.id = b.id;
        btn.innerHTML = 'Delete';
        btn.onclick = () => {
            const id = b.id;
            database.removeBook(id);
            window.location.reload();
        };

        row.insertCell(4).append(btn);
    });
}

function searchBooks() {
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;
    const genre = document.getElementById('genre').value;
    const name = document.getElementById('name').value;
    const rate = document.getElementById('rate').value;

    const book = new Book(year, month, day, genre, name, rate);

    const books = database.searchBooks(book);

    loadBooks(books);
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.body.contains(document.getElementById('listBooks'))) {
        loadBooks();
    }
});

document.getElementById('add').addEventListener('click', registerBook);
document.getElementById('search').addEventListener('click', searchBooks);

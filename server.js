// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// In-memory storage
let authors = [];
let categories = [];
let books = [];

// Add Author
app.post('/add-author', (req, res) => {
    const author = req.body;
    authors.push(author);
    res.json({ message: 'Author added successfully!' });
});

// Add Category
app.post('/add-category', (req, res) => {
    const category = req.body;
    categories.push(category);
    res.json({ message: 'Category added successfully!' });
});

// Add Book
app.post('/add-book', (req, res) => {
    const book = req.body;
    books.push(book);
    res.json({ message: 'Book added successfully!' });
});

// Get Books
app.get('/books', (req, res) => {
    res.json(books);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

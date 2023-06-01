const express = require('express');
const {retrieveBook, createBook, retrieveBookById, updateBookById, deleteBookById} = require("../controllers/book");
const router = express.Router();

//Create a new book
router.post('/books', createBook);

//Retrieve all books
router.get('/books', retrieveBook);

// Retrieve a specific book by ID
router.get('/books/:id', retrieveBookById);

//Update a book by ID
router.put('/books/:id', updateBookById);


//Delete a book by ID
router.delete('/books/:id', deleteBookById);

module.exports = router;
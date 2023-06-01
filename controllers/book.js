const Book = require('../models/book.js');

//create Book
exports.createBook = createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        // console.log(book);
        await book.save();
        res.status(201).json(book);
    } catch (err) {
        res.status(500).json({error: 'Internal server error'});
        // console.log(err)
    }
}

//retrieve books
exports.retrieveBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

// Retrieve a specific book by ID
exports.retrieveBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.status(200).json(book);
    } catch (err) {
        res.status(404).json({error: 'Book not found'});
    }
};

//Update a book by ID
exports.updateBookById = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(book);
    } catch (err) {
        res.status(404).json({error: 'Book not found'});
    }
};

//Delete a book by ID
exports.deleteBookById = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        res.sendStatus(204);

    } catch (err) {
        res.status(500).json({error: 'Internal Server Error'});
    }
}



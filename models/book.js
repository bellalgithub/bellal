const mongoose = require('mongoose');
const {Schema} = mongoose;

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        publishedYear: {
            type: Number,
        }

    },
    {timestamps: true, versionKey: false}
);

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
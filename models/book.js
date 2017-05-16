/**
 * Created by Admin on 3/29/2017.
 */
const mongoose= require('mongoose');


//const bcrypt=require('bcryptjs');
const config= require('../config/database');

// Schema for the administrator

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
     genre: {
        type: String,
         required: true
    },
    author: {
        type: String,
        required: true
    },
    edition: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    }
});

const Book = module.exports = mongoose.model('Book', BookSchema);


//Get Books
module.exports.getBooks = function (callback, limit) {
    Book.find(callback).limit(limit);
};

//Add Book
module.exports.addBook = function (book, callback) {
    Book.create(book, callback);
};

module.exports.getBookById = function (id, callback) {
    Book.findById(id, callback);
};


//get books by genre
module.exports.getBooksByGenre = function (genreName, callback) {
    const query = {genre: genreName};
    Book.find(query, callback);

};

//Update Book
module.exports.updateBook = function (id, book, options, callback) {
    const query = {_id: id};

    //console.log('In update Genre Method.. Entry is '+ genre);
    const update = {
        title: book.title,
        genre: book.genre,
        author: book.author,
        edition: book.edition,
        description: book.description,
        publisher: book.publisher,
        image_url: book.image_url,
    };
    Book.findOneAndUpdate(query, update, options, callback);
};


module.exports.updateBookGenre = function (updateBookGenreData, options, callback) {

    console.log('In main update method the old genre is '+ updateBookGenreData.oldGenre + ' the new genre is '+ updateBookGenreData.newGenre);
    const query= {genre: updateBookGenreData.oldGenre};
    Book.updateMany(query, {genre:  updateBookGenreData.newGenre}, options, callback);
};


//Delete Book
module.exports.removeBook = function (id, callback) {
    const query = {_id: id};

    Book.remove(query, callback);
};

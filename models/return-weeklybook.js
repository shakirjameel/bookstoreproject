/**
 * Created by Admin on 4/19/2017.
 */
const mongoose= require('mongoose');


//const bcrypt=require('bcryptjs');
const config= require('../config/database');

// Schema for the administrator

const ReturnWeeklySchema = mongoose.Schema({
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
    },
    user_id: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    prn:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    sem:{
        type: Number,
        required: true
    },
    issue_date: {
        type: Date,
        required: true
    },
    return_date: {
        type: Date,
        required: true
    }
});

const ReturnWeekly = module.exports = mongoose.model('ReturnWeekly', ReturnWeeklySchema);


//Get Return
module.exports.getReturnWeekly = function (callback, limit) {
    ReturnWeekly.find(callback).limit(limit);
};

//Add Book
module.exports.addReturnWeekly = function (book, callback) {
    ReturnWeekly.create(book, callback);
};

module.exports.getReturnWeeklyById = function (id, callback) {
    ReturnWeekly.findById(id, callback);
};

/*
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
*/

//Delete ReturnWeekly
module.exports.removeReturnWeekly = function (id, callback) {
    const query = {_id: id};
    ReturnWeekly.remove(query, callback);
};

/*Get Books by User ID*/
module.exports.getWeeklyBooksByUserId = function (user_id, callback) {
    const query = {user_id: user_id};
    ReturnWeekly.find(query, callback);

};

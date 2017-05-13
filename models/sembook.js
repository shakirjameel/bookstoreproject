/**
 * Created by Admin on 5/7/2017.
 */
/**
 * Created by Admin on 3/29/2017.
 */
const mongoose= require('mongoose');


//const bcrypt=require('bcryptjs');
const config= require('../config/database');

// Schema for the administrator

const SemBookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    }
});

const SemBook = module.exports = mongoose.model('SemBook', SemBookSchema);


//Get Books
module.exports.getSemBooks = function (callback, limit) {
    SemBook.find(callback).limit(limit);
};

//Add Book
module.exports.addSemBook = function (book, callback) {
    SemBook.create(book, callback);
};

module.exports.getSemBookById = function (id, callback) {
    SemBook.findById(id, callback);
};


//get books by genre
module.exports.getSemBooksBySemester = function (semesterName, callback) {
    const query = {semester: semesterName};
    SemBook.find(query, callback);

};

//Update Book
module.exports.updateSemBook = function (id, sembooks, options, callback) {
    const query = {_id: id};

    //console.log('In update Genre Method.. Entry is '+ genre);
    const update = {
        title: sembooks.title,
        semester: sembooks.semester,
        description: sembooks.description,
        image_url: sembooks.image_url,
    };
    SemBook.findOneAndUpdate(query, update, options, callback);
};


//Delete Book
module.exports.removeSemBook = function (id, callback) {
    const query = {_id: id};

    SemBook.remove(query, callback);
};

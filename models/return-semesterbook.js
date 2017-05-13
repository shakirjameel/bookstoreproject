/**
 * Created by Admin on 5/7/2017.
 */

const mongoose= require('mongoose');


//const bcrypt=require('bcryptjs');
const config= require('../config/database');

// Schema for the administrator

const ReturnSemesterSchema = mongoose.Schema({
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
    },
    user_id:{
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

const ReturnSemester = module.exports = mongoose.model('ReturnSemester', ReturnSemesterSchema);


//Get Return
module.exports.getReturnSemester = function (callback, limit) {
    ReturnSemester.find(callback).limit(limit);
};

//Add Book
module.exports.addReturnSemester = function (book, callback) {
    ReturnSemester.create(book, callback);
};

module.exports.getReturnSemesterById = function (id, callback) {
    ReturnSemester.findById(id, callback);
};
//Delete ReturnSemester
module.exports.removeReturnSemester = function (id, callback) {
    const query = {_id: id};
    ReturnSemester.remove(query, callback);
};

/*Get Books by User ID*/
module.exports.getSemBooksByUserId = function (user_id, callback) {
    const query = {user_id: user_id};
    ReturnSemester.find(query, callback);

};

/**
 * Created by Admin on 3/29/2017.
 */

const mongoose= require('mongoose');


//const bcrypt=require('bcryptjs');
const config= require('../config/database');

// Schema for the administrator

const GenreSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

const Genre = module.exports = mongoose.model('Genre', GenreSchema);


//Get Genres
module.exports.getGenres = function (callback, limit) {
    Genre.find(callback).limit(limit);
};

//Add Genre
module.exports.addGenre = function (genre, callback) {
    Genre.create(genre, callback);
};

//Update Genre
module.exports.updateGenre = function (id, genre, options, callback) {
    const query = {_id: id};

    //console.log('In update Genre Method.. Entry is '+ genre);
    const update = {
        type: genre
    };
    Genre.findOneAndUpdate(query, update, options, callback);
};

//Delete Genre
module.exports.removeGenre = function (id, callback) {
    const query = {_id: id};

    Genre.remove(query, callback);
};


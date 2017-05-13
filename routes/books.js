/**
 * Created by Admin on 4/2/2017.
 */


const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Book = require('../models/book');
const passport = require('passport');

router.get('/book', function (req, res) {
    Book.getBooks(function (err, books) {
        if(err){
            console.log('Error is '+err);
        }
        res.json(books);
    });
});


router.get('/book/:_id', function (req, res) {

    console.log(req.params._id);
    Book.getBookById(req.params._id ,function (err, book){
        if(err){
            console.log('Error is '+err);
        }
        res.json(book);
    });
});

// get book by genre
router.get('/:genrename', function(req, res){
    const genreName = req.params.genrename;

    console.log('Genre Selected is ' + genreName);
    Book.getBooksByGenre(genreName, function(err, books){
        if (err) {
            console.log(err);
        }
        res.json(books)

    });
});


router.post('/book',passport.authenticate('jwt', {session: false}), function (req, res) {

    console.log('In routes/books/.post method');
    const newBook = new Book({
        title: req.body.title,
        genre: req.body.genre,
        author: req.body.author,
        edition: req.body.edition,
        description: req.body.description,
        publisher: req.body.publisher,
        image_url: req.body.image_url
    });

    Book.addBook(newBook, function (err, book) {
        if(err){
            console.log('Error is '+err);
        }
        res.json(book);
    });
});


//Update Book
//Always put :_id in the URL. Express doesn't Recognize :id anymore and the objectID in Mongo also uses _id
router.put('/book/:_id',passport.authenticate('jwt', {session: false}), function (req, res) {
    const id = req.params._id;
    // Body me type update karne ki request bhej rha hai. Make sure Express know what part of the object you want to access
    const book = req.body;
    //console.log(id);
    //console.log(genre);
    Book.updateBook(id, book, {}, function (err, book) {
        if(err){
            console.log('Error is '+err);
        }
        res.json(book);
    });
});


//delete book
//Always put :_id in the URL. Express doesn't Recognize :id anymore and the objectID in Mongo also uses _id
router.delete('/book/:_id', function (req, res) {
    const id = req.params._id;
    //console.log(id);

    Book.removeBook(id, function (err, book) {
        if(err){
            console.log('Error is '+err);
        }
        res.json(book);
    });
});




module.exports = router;
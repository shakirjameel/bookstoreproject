/**
 * Created by Admin on 5/7/2017.
 */

const express = require('express');
const router = express.Router();
const config = require('../config/database');
const SemBook = require('../models/sembook');
const passport = require('passport');

router.get('/sembook', function (req, res) {
    SemBook.getSemBooks(function (err, books) {
        if(err){
            console.log('Error is '+err);
        }
        res.json(books);
    });
});


router.get('/sembook/:_id', function (req, res) {

    console.log(req.params._id);
    SemBook.getSemBookById(req.params._id ,function (err, book){
        if(err){
            console.log('Error is '+err);
        }
        res.json(book);
    });
});

// get book by semester
router.get('/:semester', function(req, res){
    const semester = req.params.semester;

    console.log('Semester Selected is ' + semester);
    SemBook.getSemBooksBySemester(semester, function(err, books){
        if (err) {
            console.log(err);
        }
        res.json(books)

    });
});


router.post('/sembook',passport.authenticate('jwt', {session: false}), function (req, res) {

    console.log('In routes/sembooks/.post method');
    const newSemBook = new SemBook({
        title: req.body.title,
        semester: req.body.semester,
        description: req.body.description,
        image_url: req.body.image_url
    });

    SemBook.addSemBook(newSemBook, function (err, book) {
        if(err){
            console.log('Error is '+err);
        }
        res.json(book);
    });
});


//Update Book
//Always put :_id in the URL. Express doesn't Recognize :id anymore and the objectID in Mongo also uses _id
router.put('/sembook/:_id',passport.authenticate('jwt', {session: false}), function (req, res) {
    const id = req.params._id;
    // Body me type update karne ki request bhej rha hai. Make sure Express know what part of the object you want to access
    const sembook = req.body;
    //console.log(id);
    //console.log(genre);
    SemBook.updateSemBook(id, sembook, {}, function (err, book) {
        if(err){
            console.log('Error is '+err);
        }
        res.json(book);
    });
});


//delete book
//Always put :_id in the URL. Express doesn't Recognize :id anymore and the objectID in Mongo also uses _id
router.delete('/sembook/:_id', function (req, res) {
    const id = req.params._id;
    //console.log(id);

    SemBook.removeSemBook(id, function (err, book) {
        if(err){
            console.log('Error is '+err);
        }
        res.json(book);
    });
});




module.exports = router;
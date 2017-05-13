/**
 * Created by Admin on 5/7/2017.
 */

const express = require('express');
const router = express.Router();
const config = require('../config/database');
const ReturnSemesterBook = require('../models/return-semesterbook');
const passport = require('passport');

router.get('/returnsemesterbook', function (req, res) {
    ReturnSemesterBook.getReturnSemester(function (err, books) {
        if(err){
            console.log('Error is '+err);
        }
        res.json(books);
    });
});


router.get('/returnsemesterbook/:_id', function (req, res) {

    console.log(req.params._id);
    ReturnSemesterBook.getReturnSemesterById(req.params._id ,function (err, book){
        if(err){
            console.log('Error is '+err);
        }
        res.json(book);
    });
});



router.post('/returnsemesterbook', function (req, res) {

    console.log('In routes/returnsemesterbooks/.post method');
    const newReturnSemesterBook = new ReturnSemesterBook({
        title: req.body.title,
        semester: req.body.semester,
        description: req.body.description,
        image_url: req.body.image_url,
        user_id: req.body.user_id,
        username: req.body.username,
        prn: req.body.prn,
        email: req.body.email,
        mobile: req.body.mobile,
        sem: req.body.sem,
        issue_date: Date.now(),
        return_date: Date.now() + 6*30*24*60*60*1000
    });

    ReturnSemesterBook.addReturnSemester(newReturnSemesterBook, function (err, book) {
        if(err){
            console.log('Error is '+err);
        }
        res.json(book);
    });
});

//delete book
//Always put :_id in the URL. Express doesn't Recognize :id anymore and the objectID in Mongo also uses _id
router.delete('/returnsemesterbook/:_id',passport.authenticate('jwt', {session: false}), function (req, res) {
    const id = req.params._id;
    //console.log(id);

    ReturnSemesterBook.removeReturnSemester(id, function (err, book) {
        if(err){
            console.log('Error is '+err);
        }
        res.json(book);
    });
});

// get book by user id
router.get('/:user_id', function(req, res){
    const user_id = req.params.user_id;

    console.log('User_ID Selected is ' + user_id);
    ReturnSemesterBook.getSemBooksByUserId(user_id, function(err, books){
        if (err) {
            console.log(err);
        }
        res.json(books)

    });
});




module.exports = router;
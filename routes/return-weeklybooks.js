/**
 * Created by Admin on 4/19/2017.
 */

const express = require('express');
const router = express.Router();
const config = require('../config/database');
const ReturnWeeklyBook = require('../models/return-weeklybook');
const passport = require('passport');

router.get('/returnweeklybook', function (req, res) {
    ReturnWeeklyBook.getReturnWeekly(function (err, books) {
        if(err){
            console.log('Error is '+err);
        }
        res.json(books);
    });
});


router.get('/returnweeklybook/:_id', function (req, res) {

    console.log(req.params._id);
    ReturnWeeklyBook.getReturnWeeklyById(req.params._id ,function (err, book){
        if(err){
            console.log('Error is '+err);
        }
        res.json(book);
    });
});



router.post('/returnweeklybook', function (req, res) {

    console.log('In routes/returnweeklybooks/.post method');
    const newReturnWeeklyBook = new ReturnWeeklyBook({
        title: req.body.title,
        genre: req.body.genre,
        author: req.body.author,
        edition: req.body.edition,
        description: req.body.description,
        publisher: req.body.publisher,
        image_url: req.body.image_url,
        user_id: req.body.user_id,
        username: req.body.username,
        prn: req.body.prn,
        email: req.body.email,
        mobile: req.body.mobile,
        sem: req.body.sem,
        issue_date: Date.now(),
        return_date: Date.now() + 7*24*60*60*1000
    });

    ReturnWeeklyBook.addReturnWeekly(newReturnWeeklyBook, function (err, book) {
        if(err){
            console.log('Error is '+err);
        }
        res.json(book);
    });
});

//delete book
//Always put :_id in the URL. Express doesn't Recognize :id anymore and the objectID in Mongo also uses _id
router.delete('/returnweeklybook/:_id',passport.authenticate('jwt', {session: false}), function (req, res) {
    const id = req.params._id;
    //console.log(id);

    ReturnWeeklyBook.removeReturnWeekly(id, function (err, book) {
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
    ReturnWeeklyBook.getWeeklyBooksByUserId(user_id, function(err, books){
        if (err) {
            console.log(err);
        }
        res.json(books)

    });
});

module.exports = router;
/**
 * Created by Admin on 3/29/2017.
 */
/**
 * Created by Admin on 3/25/2017.
 */

const express = require('express');
const router = express.Router();
const passport = require('passport');

const config = require('../config/database');
const Genre = require('../models/genre');

router.get('/weeklygenre', function (req, res) {
    Genre.getGenres(function (err, genres) {
        if(err){
            console.log('Error is '+err);
        }
        //res.json({genres: req.genre});
        res.json(genres);
    });
});

router.post('/weeklygenre', passport.authenticate('jwt', {session: false}), function (req, res) {

    const genre = req.body;

    const newGenre = new Genre({
        type: genre.genrename,
        create_date: Date.now()
    });
    console.log('In post of genres '+ newGenre.type );
    Genre.addGenre(newGenre, function (err, newGenre) {
        if(err){
            console.log('Error is '+err);
        }
        res.json(newGenre);
    });
});

//Always put :_id in the URL. Express doesn't Recognize :id anymore and the objectID in Mongo also uses _id
router.put('/weeklygenre/:_id', passport.authenticate('jwt', {session: false}), function (req, res, next) {
    const id = req.params._id;
    // Body me type update karne ki request bhej rha hai. Make sure Express know what part of the object you want to access
    const genre = req.body.type;
    //console.log(id);
    //console.log(genre);
    Genre.updateGenre(id, genre, {}, function (err, genre) {
        if(err){
            console.log('Error is '+err);
        }
        res.json(genre);
    });
});

//Always put :_id in the URL. Express doesn't Recognize :id anymore and the objectID in Mongo also uses _id
router.delete('/weeklygenre/:_id', passport.authenticate('jwt', {session: false}),function (req, res) {
    const id = req.params._id;
    //console.log(id);

    Genre.removeGenre(id, function (err, deleteResponse) {
        if(err){
            console.log('Error is '+err);
        }
        console.log('In genres/ delete genre/  genre is '+deleteResponse);
        res.json(deleteResponse);
    });
});

module.exports = router;
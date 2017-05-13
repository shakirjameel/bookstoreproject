/**
 * Created by Admin on 3/8/2017.
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');



// Register
router.post('/register', function(req, res, next) {

    console.log('In Router of Register');
    const newUser = new User({
        username: req.body.username,
        prn: req.body.prn,
        email: req.body.email,
        mobile: req.body.mobile,
        sem: req.body.sem,
        password: req.body.password,
        semIssueCounter: req.body.semIssueCounter,
        weeklyIssueCounter: req.body.weeklyIssueCounter
    });

    console.log('In users.js registering user '+ newUser.username);

    User.getUserByUsername(newUser.username, function (err, user) {
       if (err) {
           console.log('Error is : '+err);
       }
       if(!user){
           User.addUser(newUser, function (err, user) {
               if(err){
                   res.json({success: false, msg:'Oops, something went wrong. Failed to register the user!'});
                   console.log('User not added by the name' + newUser.username);
               }else{
                   res.json({success:true, msg: 'User Registered!'});
                   console.log('User added by the name' + newUser.username);
               }
           });
       } else{
           return res.json({success: false, msg: 'User already exists!'});
       }

    });

});



// Authenticate
router.post('/authenticate', function(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, function (err, user) {
        if (err) {
            console.log('Error is : '+err);
        }
        if (!user) {
            return res.json({success: false, msg: 'User Not Found'});
        }

        User.comparePassword(password, user.password, function (err, isMatch) {



            if (err){
                console.log('Error is : '+err);
            }

            if (isMatch) {
                const token = jwt.sign(user, config.secret, {
                        expiresIn: 604800
                    }// One week
                );

                res.json(
                    {
                        success: true,
                        token: 'JWT ' + token,
                        user: {
                            id: user._id,
                            name: user.username,
                            prn: user.prn,
                            sem: user.sem,
                            email: user.email,
                            mobile: user.mobile
                        }
                    });
            } else {
                return res.json({success: false, msg: 'Wrong Password'});
            }
        });
    });

});

// Profile
router.get('/:id', function (req, res) {
        //res.send('PROFILE');
    const userID= req.params.user_id;
    console.log('In users/get/profile');

    User.getUserById(userID, function (err, user) {
        if(err){
            console.log(err);
        }
        return res.json(user);
    });


});

module.exports = router;

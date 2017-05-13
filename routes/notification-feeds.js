/**
 * Created by Admin on 5/8/2017.
 */

const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Notification = require('../models/notification-feed');
const passport = require('passport');

router.get('/notifications', function (req, res) {
    Notification.getNotifications(function (err, notifications) {
        if(err){
            console.log('Error is '+err);
        }
        res.json(notifications);
    });
});


router.post('/notifications', passport.authenticate('jwt', {session: false}), function (req, res) {

    console.log('In routes/notifications/.post method');
    const newNotification = new Notification({
        notification: req.body.notification,
        created_by: req.body.created_by,
        created_on: Date.now()
    });

    Notification.addNotification(newNotification, function (err, notification) {
        if(err){
            console.log('Error is '+err);
        }
        res.json(notification);
    });
});


module.exports = router;
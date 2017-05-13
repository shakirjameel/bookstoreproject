/**
 * Created by Admin on 5/8/2017.
 */
const mongoose= require('mongoose');


//const bcrypt=require('bcryptjs');
const config= require('../config/database');

// Schema for the administrator

const NotificationSchema = mongoose.Schema({
    notification: {
        type: String,
        required: true
    },
    created_by: {
        type: String,
        required: true
    },
    created_on: {
        type: Date,
        required: true
    }
});

const Notification = module.exports = mongoose.model('Notification', NotificationSchema);


module.exports.getNotifications = function (callback, limit) {
    Notification.find(callback).limit(limit);
};

//Add Book
module.exports.addNotification = function (book, callback) {
    Notification.create(book, callback);
};

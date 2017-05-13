/**
 * Created by Admin on 3/8/2017.
 */
const mongoose= require('mongoose');
//const Schema= mongoose.Schema;


const bcrypt=require('bcryptjs');
const config= require('../config/database');

//User Scheme Extremely Important: the names used in this object must be exactly followed in the routes/users.js or else you'll be fucked
const UserSchema = mongoose.Schema({
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

        password:{
            type: String,
            required: true
        },

        semIssueCounter:{
            type: Number,
            required: true
        },

        weeklyIssueCounter:{
            type: Number,
            required: true
        }

});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.addUser = function (newUser, callback) {
  bcrypt.genSalt(10,function (err, salt) {
      bcrypt.hash(newUser.password, salt, function (err, hash) {
         if(err) throw err;
         newUser.password = hash;
         newUser.save(callback);
      });
  })
};

module.exports.getUserById = function (id, callback) {
    const query = {id: id};
    User.findOne(query,callback);
};


module.exports.getUserByUsername = function (username, callback) {
    const query = {username: username};
    User.findOne(query,callback);
};


// Remains the same for user and Admin
module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        if(err) {
            console.log('Error is : '+err);
        }
        callback(null, isMatch);
    });
};


module.exports.updateCounter = function (id, user, options, callback) {
    const query = {_id: id};

    //console.log('In update Genre Method.. Entry is '+ genre);
    const update = {
        username: user.username,
        prn: user.prn,
        email: user.email,
        mobile: user.email,
        sem: user.sem,
        password: user.password,
        semIssueCounter: user.semIssueCounter,
        weeklyIssueCounter: book.weeklyIssueCounter,
    };
    User.findOneAndUpdate(query, update, options, callback);
};




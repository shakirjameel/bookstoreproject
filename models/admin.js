/**
 * Created by Admin on 3/25/2017.
 */

const mongoose= require('mongoose');


const bcrypt=require('bcryptjs');
const config= require('../config/database');

// Schema for the administrator

const AdminSchema = mongoose.Schema({
    adminname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Admin = module.exports = mongoose.model('Admin', AdminSchema);

module.exports.getAdminById = function (id, callback) {
    Admin.findById(id, callback);
};

module.exports.getAdminByAdminname = function (adminname, callback) {
    const query = {adminname: adminname};
    Admin.findOne(query,callback);
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


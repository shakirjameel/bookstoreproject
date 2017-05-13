/**
 * Created by Admin on 3/25/2017.
 */

const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Admin = require('../models/admin');

// Authenticate
router.post('/authenticate', function(req, res, next) {
    const adminname = req.body.adminname;
    const password = req.body.password;

    Admin.getAdminByAdminname(adminname, function (err, admin) {
        if (err) {
            console.log('Error is : '+err);
        }
        if (!admin) {
            return res.json({success: false, msg: 'Administrator Not Found'});
        }

        Admin.comparePassword(password, admin.password, function (err, isMatch) {

            //
            // console.log('In routes/admins get Admin by name/Compare Password');

            if (err){
                console.log('Error is : '+err);
            }

            if (isMatch) {
                const token = jwt.sign(admin, config.secret, {
                        expiresIn: 604800
                    }// One week
                );
                res.json(
                    {
                        success: true,
                        token: 'JWT ' + token,
                        admin: {
                            name: admin.adminname
                        }
                    });
            } else {
                return res.json({success: false, msg: 'Wrong Password'});
            }
        });
    });

});

module.exports = router;
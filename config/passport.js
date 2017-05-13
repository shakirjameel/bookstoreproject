/**
 * Created by Admin on 3/19/2017.
 */
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Admin = require('../models/admin');
const config = require('../config/database');


module.exports = function(passport){
    const opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        Admin.getAdminById(jwt_payload._doc._id, function (err, admin) {
            if(err){
                return done(err, false);
            }
            if(admin){
                return done(null, admin);
            } else{
                return done(null, false);
            }
        });
    }));
}

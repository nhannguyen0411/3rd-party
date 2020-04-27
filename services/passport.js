const passport = require('passport');
const keys = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.serializeUser((user, cb) => {
    cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
    User.findById(id, (err, user) => {
        cb(err, user);
    })
})

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
        console.log('access token: ', accessToken);
        User.findOne({ googleID: profile.id }, function (err, user) {
            console.log(user);
            if(user) {
                return cb(null, user)
            } else {
                new User({googleID: profile.id}).save((err, newUser) => {
                    return cb(err, newUser);
                })
            }
        });
    }
));
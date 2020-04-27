//const controller = require('../controller/auth-controller');
var router = require('express').Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { successRedirect: '/auth', failureRedirect: '/auth/login' }))

router.get('/', (req, res) => {
    res.send('Hello World!!!');
})

router.get('/login', (req, res) => {
    res.send('Login');
})

module.exports = router;
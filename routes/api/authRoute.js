//const controller = require('../controller/auth-controller');
var router = require('express').Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { successRedirect: '/auth', failureRedirect: '/auth/logout' }))

router.get('/', (req, res) => {
    res.send(req.user);
})

router.get('/logout', (req, res) => {
    req.logOut();
    res.send({
        success: true,
        message: req.user
    });
})

module.exports = router;
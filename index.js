const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const PORT = process.env.PORT || 5000;
require('./services/passport');
mongoose.connect(keys.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected mongoDB');
}, );

app.use(
    cookieSession({
        maxAge: Date.now(),
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/api/authRoute');
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log('Server running on ' + PORT);
})
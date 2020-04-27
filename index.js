const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const keys = require('./config/keys');
mongoose.connect(keys.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected mongoDB');
}, );

require('./services/passport');
const authRoutes = require('./routes/api/authRoute');
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log('Server running on ' + PORT);
})
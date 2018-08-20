const mongoose = require('mongoose');
mongoose
    .connect('mongodb://admin:admin@ds259258.mlab.com:59258/buntstagram')
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));
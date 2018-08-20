const mongoose = require('mongoose');
mongoose
    .connect(process.env.MDB)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecommerce').then(() => {
    console.log('connected to db');
}).catch((err) => {
    console.log(err);
})
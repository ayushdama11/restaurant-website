/**
* this configuration for connect our application with mongodb
*/
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/restaurant', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
    } else {
        console.log('Connected to MongoDB');
        // You can start using your mongoose models or perform other operations here.
    }
});
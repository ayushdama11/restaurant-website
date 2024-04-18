const mongoose = require('mongoose');

const connectWithRetry = () => {
    mongoose.connect('mongodb://localhost:27017/restaurant', { useNewUrlParser: true, useUnifiedTopology: true,family: 4}, (err) => {
        if (err) {
            console.error('Error connecting to MongoDB:', err);
            // Retry connection after a delay
            setTimeout(connectWithRetry, 5000);
        } else {
            console.log('Connected to MongoDB');
            // You can start using your mongoose models or perform other operations here.
        }
    });
};

connectWithRetry();

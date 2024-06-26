const db = require('./config/database');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const passportSetup = require('./config/passport-setup');

const port = process.env.PORT || 3000; // Use environment port or default to 3000

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from CDN or separate server in production
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(express.static('node_modules'));

app.use(session({
    secret: process.env.SESSION_SECRET || 'A21E14d4_g1fdz55415_6ZRT41641ZE_561erf1e_2g1fg1fg0_e',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 60000 * 20}
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.get('*', (req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

// Redirect root to login page
app.get('/', (req, res) => {
    res.redirect('/users/login');
});

// Define your routes here...
const dashboard = require('./routes/dashboard.routes');
app.use('/dashboard', dashboard);

const chefs = require('./routes/chef.routes');
app.use('/chef', chefs);

const tables = require('./routes/table.routes');
app.use('/table', tables);

const booking = require('./routes/booking.routes');
app.use('/booking', booking);

const drink = require('./routes/drink.routes');
app.use('/drink', drink);

const bill = require('./routes/bill.routes');
app.use('/bill', bill);

const food = require('./routes/food.routes');
app.use('/food', food);

const customer = require('./routes/customer.routes');
app.use('/customer', customer);

const waiter = require('./routes/waiter.routes');
app.use('/waiter', waiter);

const users = require('./routes/user.routes');
app.use('/users', users);

app.get('*', function(req, res){
    res.status(404).redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

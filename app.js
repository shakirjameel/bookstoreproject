/**
 * Created by Admin on 3/8/2017.
 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', function () {
    console.log('Connected to database '+config.database);
});

// On Error
//mongoose.connection.on('error', (err) => {
  //  console.log('Database error: '+err);
//});

const app = express();

const users = require('./routes/users');
const admins = require('./routes/admins');
const genres = require('./routes/genres');
const books = require('./routes/books');
const sembooks = require('./routes/sembooks');
const returnweeklybooks = require('./routes/return-weeklybooks');
const returnsemesterbooks = require('./routes/return-semesterbooks');
const notifications = require('./routes/notification-feeds');


// Port Number
const port = process.env.PORT || 8000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport); //(passport)

app.use('/users', users);
app.use('/admins', admins);
app.use('/genres', genres);
app.use('/books', books);
app.use('/sembooks', sembooks);
//No default URL for Return Weekly Book
app.use('/return', returnweeklybooks);
app.use('/returnsemester', returnsemesterbooks);
app.use('/',notifications);
// Index Route
app.get('/', function(req, res) {
    res.send('Invalid Endpoint');
});
// Start Server
app.listen(port, function() {
    console.log('Server started on port '+port);
});

var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
const helmet = require('helmet')
// var logger = require('morgan');

var register = require('./routes/register');
var usersRouter = require('./routes/users');

var app = express();

app.use(helmet({
  contentSecurityPolicy : true,
}));
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', register);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404,'The resource you are trying to access, is not found'));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    status: false,
    result: [],
    errors: err.message
  });
});

module.exports = app;
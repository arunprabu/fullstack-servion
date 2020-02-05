var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var passport = require('passport');  //needed for passport
var session = require('express-session');  //needed for passport
var jwt = require('express-jwt'); //needed for passport 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');

//connecting the models here directly 
require('./models/account');
//connecting passport config
require('./config/passportConfig');

var app = express();  // setting up express app 

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors(corsOptions));

app.use(session({
  secret: 'thesecret',
  saveUninitialized: false,
  resave: false
}))

var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

app.use('/', indexRouter); // localhost:3000/
app.use('/api/users', usersRouter); // localhost:3000/api/users
app.use('/api/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

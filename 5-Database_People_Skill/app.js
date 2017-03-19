var express     = require('express');
var path        = require('path');
var bodyParser  = require('body-parser');
var cors        = require('cors')

var index  = require('./routes/index');
var users  = require('./routes/users');
var api    = require('./routes/api');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/people_skills')
mongoose.Promise  = global.Promise;
// mongoose.Promise = require('bluebird');
// mongoose.Promise = require('q').Promise;

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Database Connected')
})

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', index);
app.use('/users', users);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;

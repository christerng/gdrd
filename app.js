var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var lengthsRouter = require('./routes/lengths');
var volumesRouter = require('./routes/volumes');
var ordersRouter = require('./routes/orders');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// React apps
app.use('/admin', express.static(path.join(__dirname, './frontend/admin_user/build')));
app.use('/event', express.static(path.join(__dirname, './frontend/event_user/build')));
app.use('/queue', express.static(path.join(__dirname, './frontend/queue_user/build')));
app.use('/staff', express.static(path.join(__dirname, './frontend/staff_user/build')))

// Internal APIs
app.use('/api/lengths', lengthsRouter);
app.use('/api/volumes', volumesRouter);
app.use('/api/orders', ordersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

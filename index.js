var cookieParser = require('cookie-parser');
var createError = require('http-errors');
var debug = require('debug')('backend:server');
var http = require('http');
var express = require('express');
var logger = require('morgan');
var path = require('path');

var indexRouter = require('./api/index');
var lengthsRouter = require('./api/lengths');
var volumesRouter = require('./api/volumes');
var orderRouter = require('./api/order');

var app = express();

var port = normalizePort(process.env.PORT || '9000');
app.set('port', port);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.use('/', indexRouter);
app.use('/api/lengths', lengthsRouter);
app.use('/api/volumes', volumesRouter);
app.use('/api/order', orderRouter);
app.use((req, res, next) => {
    next(createError(404));
});
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

var server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
        default:
            throw error;
    }
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

module.exports = app;
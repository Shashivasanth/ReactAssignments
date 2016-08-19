require('colors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var mongoose = require('mongoose');
var MessageModel = require('./modal/GmailMessageModel');
var port = +process.env.PORT || 5000;
var db ='mongodb://user:password@ds161475.mlab.com:61475/gmaildb';
//
mongoose.connect(db);
//
// var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
//
// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client/dist/')));
//
// app.use('/', routes);
// app.use('/users', users);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handlers
//
// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }
//
// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });
//

app.post('/MessageModel', function(req, res) {
    console.log('request body '+ req.body);
    MessageModel.create(req.body, function(err, data) {
        if(err) {
            res.send('error');
        } else {
            console.log('[POST] inserting message details.'.blue);
            res.send(data);
        }
    });
});


app.get('/MessageModel', function(req, res) {
    console.log("inside get");
   MessageModel.find({})
   .exec(function(err, data) {
       if(err) {
           res.send('error');
       } else {
           console.log('[GET] .'.blue);
           res.json(data);
       }
   });
});

module.exports = app;

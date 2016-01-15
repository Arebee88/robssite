/// <reference path="../typings/tsd.d.ts" />
var e = require('express');
var app = e.Router();
/**
 * About section
 * */
app.get('/rob', function (req, res, next) {
    console.log('yo');
    res.render('data', {});
});
app.get('/site', function (req, res, next) {
    res.render('data', {});
});
/**
 *  Projects section
 * */
app.get('/data', function (req, res, next) {
    console.log('ho');
    res.render('data', {});
});
/**
 * Contact
 * */
/**
 *  Home
 * */
app.get('/', function (req, res, next) {
    console.log('go');
    res.render('index', {});
});
module.exports = app;
//# sourceMappingURL=website.js.map
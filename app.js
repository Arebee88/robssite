/**
 * Remember that Express declarations are not commutative!
 * */
/// <reference path="typings/tsd.d.ts" />
/**
 * Dependencies:
 * */
var e = require("express");
var app = e();
var consolidate_1 = require("consolidate");
var path = require('path');
var view = path.join(__dirname, 'views');
var staticFiles = path.join(__dirname, 'public');
var bParse = require('body-parser');
/**
 * Routes:
 * */
var website = require('./routes/website');
var dataWrite = require('./routes/dataWrite');
var dataRead = require('./routes/dataRead');
/**
 * Settings:
 * */
//Static files
app.use(e.static(staticFiles));
// Template Enging
app.engine('html', consolidate_1.nunjucks);
app.set('view engine', 'html');
app.set('views', view);
// HTTP POST body parser
app.use(bParse.json());
app.use(bParse.urlencoded({ extended: false }));
/**Registering routes with app.router*/
app.use('/db', dataWrite); // for writing to the database
app.use('/data', dataRead); // for reading from the database
app.use('/', website);
module.exports = app;
//# sourceMappingURL=app.js.map
/**
 * Remember that Express declarations are not commutative!
 * */
/// <reference path="typings/tsd.d.ts" />
/**
 * Dependencies:
 * */
import e = require("express");
    const app = e();

import {nunjucks} from "consolidate";

import * as path from 'path';
    let view = path.join(__dirname,'views');
    let staticFiles = path.join(__dirname,'public');

import * as bParse from 'body-parser';

/**
 * Routes:
 * */
const website = require('./routes/website');
const dataWrite = require('./routes/dataWrite');
const dataRead = require('./routes/dataRead');

/**
 * Settings:
 * */

//Static files
app.use(e.static(staticFiles));

// Template Enging
app.engine('html', nunjucks);
app.set('view engine', 'html');
app.set('views', view);

// HTTP POST body parser
app.use(bParse.json());
app.use(bParse.urlencoded({extended : false}));

/**Registering routes with app.router*/

app.use('/db', dataWrite); // for writing to the database
app.use('/data', dataRead); // for reading from the database
app.use('/', website);

module.exports = app;
//mClient.connect(url, function (err, db) {
//    db.collection('users').insertOne(req.body, function (err, doc) {});
//    db.collection('users').find({}).toArray(function (err, docs) {
//        if(err){
//            console.log('error!');}
//        else {
//            console.log(typeof docs);
//            res.render('index', {'submitted': 'subbed', 'user': docs});
//        }db.close();
//    });
//});
/// <reference path="../typings/tsd.d.ts" />
const e = require('express');
const app = e.Router();
import {MongoClient} from 'mongodb';
const url = 'mongodb://localhost:27017/db';
import * as pBody from 'body-parser';


module.exports = app;
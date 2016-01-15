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
var e = require('express');
var app = e.Router();
var url = 'mongodb://localhost:27017/db';
module.exports = app;
//# sourceMappingURL=dataWrite.js.map
const e = require('express');
const app = e.Router();
import {MongoClient} from 'mongodb';
const url = 'mongodb://localhost:27017/db';
import * as pBody from 'body-parser';


module.exports = app;
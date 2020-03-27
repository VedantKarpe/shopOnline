var express=require("express");
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();
var assert = require('assert');
const jwt= require('jsonwebtoken');

var url = 'mongodb+srv://admin:admin@cluster0-muz8o.mongodb.net/test?retryWrites=true&w=majority';
const dbName = 'shopOnline';

function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, '')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  next();
}

router.post("/createUser/", function(request,response){
response.setHeader("Allow-Control-Allow-Origin", "*");
response.setHeader("Access-Control-Allow-Origin", "*");
response.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS,HEAD");
response.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  const db = client.db(dbName);
  const col1 = db.collection('userDetails');
  col1.insertOne(request.body);
  response.end();
  client.close();
});
});


module.exports=router;
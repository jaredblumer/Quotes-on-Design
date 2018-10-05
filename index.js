// Set Up Express
const express = require('express');
const app = express();
const path = require('path');
var port = process.env.PORT || 8080;

// Set up mongo
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = "mongodb://admin:SmithSeppuku--2013@ds123003.mlab.com:23003/success-quotes-api";

const client = new MongoClient(url);
var db;
var collection;

client.connect(function(err) {
  assert.equal(null, err);
  console.log('Connected to mongoDB');
  db = client.db('success-quotes-api');
  collection = db.collection('quotes');
});

app.get('/api', (req, res) => {
  var promise = new Promise(function(resolve, reject) {
    var cursor = collection.find()
      .project({ _id: 0 });
    cursor.toArray(function(err, docs) {
      console.log(docs);
    });
  });
});

// Get index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Serve CSS Directory
app.use('/css', express.static('css'));

//Serve Javascript Directory
app.use('/js', express.static('js'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});

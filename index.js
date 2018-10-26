// Set Up Express
const express = require('express');
const app = express();
const path = require('path');
var port = process.env.PORT || 8080;
app.set('view engine', 'ejs');

// Set up mongoDB
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = process.env.MONGODB_URI;

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
      var docsLen = docs.length;
      // Choose random quote
      var quoteIndex = Math.floor(Math.random() * (docsLen - 1));
      resolve(docs[quoteIndex]);
    });
  });
  promise.then(function(value) {
    res.set('Content-Type', 'application/json');
    res.status(200).send(value);
  });
});

// Render index.html
app.get('/', function(req, res) {
  var promise = new Promise(function(resolve, reject) {
    var cursor = collection.find()
      .project({ _id: 0 });
    cursor.toArray(function(err, docs) {
      var docsLen = docs.length;
      // Choose random quote
      var quoteIndex = Math.floor(Math.random() * (docsLen - 1));
      resolve(docs[quoteIndex]);
    });
  });
  promise.then(function(quoteObj) {
    var quote = '\u201C' + quoteObj.quote + '\u201D';
    var author = quoteObj.author;
    res.set('Content-Type', 'text/html');
    res.status(200).render('index', {
      quote: quote,
      author: author
    });
  });
});

// Serve CSS Directory
app.use('/css', express.static('css'));

//Serve Javascript Directory
app.use('/js', express.static('js'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});

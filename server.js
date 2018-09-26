var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8080;

// Get Index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Serve CSS Directory
app.use('/css', express.static('css'));

//Serve Javascript Directory
app.use('/js', express.static('js'));

app.listen(port);

console.log("Server listening on port 8080");

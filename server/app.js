var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var animals = require('./routes/animals')

// Use the body parser.
app.use(bodyParser.urlencoded({ extended: true }));

// Use animals routes.
app.use('/animals', animals);

// Serve static files.
app.get('/*', function (req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, './public', file));
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('Listening on port ', app.get('port'));
});

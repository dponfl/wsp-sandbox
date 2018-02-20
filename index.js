var express = require('express');
var app = express();
var path    = require("path");

app.set('port', (process.env.PORT || 5000));

app.set('view options', {layout: false});

app.use(express.static(__dirname + '/dist.dev'));

// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
  // res.type('html');
  // res.send(__dirname + '/dist.dev/index.html');
  res.render(path.join(__dirname+'/dist.dev/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
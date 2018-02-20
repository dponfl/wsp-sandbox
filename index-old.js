var express = require('express');
var app = express();

console.log('!!!!!!!!!!!!!!!!!!!!!!');
console.log('PORT: ' + process.env.PORT);
console.log('__dirname: ' + __dirname);
console.log('!!!!!!!!!!!!!!!!!!!!!!');


app.set('port', (process.env.PORT || 5000));

app.set('view options', {layout: false});

app.use(express.static(__dirname + '/dist.dev'));

// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

app.get('/', function(request, response) {
  response.render(__dirname + '/dist.dev/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
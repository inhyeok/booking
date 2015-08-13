var express = require('express')
  , http = require('http')
  , app = express()
  , server = http.createServer(app)
  , path = require("path")
  , serveStatic = require('serve-static');

//app.use(serveStatic('static'))
app.use('/static', serveStatic('static'));
app.use('/bower_components', serveStatic('bower_components'));

app.set('views', __dirname + '/views'); // general config
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', { title: 'Booking' });
});
app.get('/jsTest', function (req, res) {
  res.render('jsTest', { title: 'jsTest' });
});

server.listen(3000, function() {
  console.log('Express server listening on port ' + server.address().port);
});
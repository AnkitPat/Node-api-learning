var http = require('http');
var dt = require('./mydate')
var url = require('url');
var upperCase = require('upper-case');
const { ESRCH } = require('constants');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  console.log(req.url)
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.write(txt + upperCase.upperCase('hello '));
  res.end('there')
}).listen(8082);
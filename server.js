var express = require("express");
var session = require("express-session");

var app = express();
app.use(session({
  secret: 'codingdojorocks'
}));
// this is the line that tells our server to use the "/static" folder for static content
// app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get('/', function(req, response) {
  if (!('count' in req.session)) {
    req.session.count = 1;
  }


  response.render("index", {
    count: req.session.count
  });
})
app.get('/increment', function(req, res) {
  req.session.count++;
  res.redirect('/')
})

app.get('/reset', function(req, res) {
  req.session.count = 0;
  res.redirect('/')
})

app.listen(8000, function() {
  console.log("listening on 8000");
})

app.get("/reset", function(req, response) {
  // hard-coded user data
  var count = 0;
  response.render("index");
})

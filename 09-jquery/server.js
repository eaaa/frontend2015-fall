var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static(__dirname + '/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/register", function(req, res, next){
  res.json(req.body);
});

var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log("Listening on port " + port);
});


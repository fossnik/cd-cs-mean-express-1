var express = require('express');
var app = express();

app.get('/', function (request, response) {
	response.send("Hello World");
});

app.get('/name', function (request, response) {
	response.send("Zack");
});

app.get('/redirect', function (request, response) {
	response.redirect(301, '/suprise');
});

app.get('/suprise', function (request, response) {
	response.send("sue-preeze, suckah!");
});

app.listen(8000, function () {
	console.log("Port of Call - 8000");
});

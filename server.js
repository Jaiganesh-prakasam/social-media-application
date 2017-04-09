var express = require("express"),
	app = express(),
	port = process.env.PORT || 5000;

app.use(express.static("dist"));

app.listen(port, function(){
	console.log("browse http://localhost:5000/")
});
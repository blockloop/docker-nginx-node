var express = require("express");
var cookieParser = require("cookie-parser");

var app = express();
app.use(cookieParser());

app.get("/auth", function(req, res, next) {
	if (req.cookies && req.cookies.access_token == "opensesame") {
		res.status(200).end();
	} else {
		res.status(401).end();
	}
});

app.get("/login", function(req, res, next) {
	res.cookie("access_token", "opensesame", { maxAge: 900000, httpOnly: true });
	res.status(200).send("You're authenticated!");
});

app.get("/", function(req, res, next) {
	res.send({ message: "hello, world", date: new Date() });
});

app.listen(3000);
console.log("listening on port 3000");

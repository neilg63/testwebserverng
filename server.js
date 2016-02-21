var express = require("express");
var app = express();
const settings = {
	port: 3000
};
var middleware = {
	requireAuthentication: function(req,res,next) {
		console.log("private route hit!");
		next();
	},
	logger: function(req,res,next) {
		var ds = new Date().toString();
		console.log(ds + ": " + req.method + " " + req.originalUrl);
		next();
	}
}

// app.get('/',function(req,res){
// 	res.send("Hello Express");
// });

app.use(middleware.logger);

app.use(middleware.requireAuthentication);

app.get('/about',middleware.requireAuthentication,
	function(req,res){
	res.send("<h1>About page</h1>");
});

app.use(express.static(__dirname + '/public'));


app.listen(settings.port,function() {
	console.log("Express server starting on " + settings.port);
});
module.exports = {
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
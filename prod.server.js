var express = require('express');


var port = process.env.PORT || 8083

var app = express();

var router = express.Router();

router.get('/', function (req, res, next) {
  req.url = '/index.html';
  
	next();
});

app.use(router);




app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
  console.log('sdfsdfd')
	if (err) {
		console.log(err);
		return
	}
	console.log('Listening at http://localhost:' + port + '\n')
});
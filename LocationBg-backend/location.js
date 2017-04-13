var express = require('express');
var bodyParser = require('body-parser');
const port=3000;

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post('/api/location', function(request, response){
	console.log('location ['+request.body.lat +  " ," + request.body.lon + " ]");
	return response.status(200).json({
		state: parseInt(1)
	})
})

app.listen(port, function(){
	console.log('Listening at port '+port);
});
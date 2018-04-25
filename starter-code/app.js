
const express = require('express');

const app = express();

//const home = require('./controllers');

//app.use(express.static('public'));

app.get('/',(req,res) => {

	res.send('Vales verga');
	// res.sendFile(__dirname + '/public/views/index.html');

});

app.listen(3000,()=>{
	console.log('Servirá');
});























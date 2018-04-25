
const express = require('express');

const app = express();

const galeria = require('./controllers');

app.use(express.static('public'));

app.get('/',(req,res) => {

	res.sendFile(__dirname + '/public/views/index.html');

});

app.get('/about',(req,res) => {

	res.sendFile(__dirname + '/public/views/about.html');

});

app.get('/galeria',(req,res) => {

	res.sendFile(__dirname + '/public/views/gallery.html');

});

app.listen(3000,()=>{
	console.log('Servirá');
});























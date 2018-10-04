const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers');

const app = express();



/* middleware */
app.use(express.static(__dirname + '/public'));

/* expressjs HBS engine */
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
	/*res.send('Hello world');
	let salida = {
		nombre: 'Fernando',
		edad: 32,
		url: req.url
	}
	res.send(salida);*/
	res.render('home', {
		footer_name: 'Node.js Foundation. All Rights Reserved. Portions of this site originally © Joyent.',
		name: 'Luis' 
	});
});

app.get('/about', (req, res) => {
	
	res.render('about', {
		footer_name: 'Node.js Foundation. All Rights Reserved. Portions of this site originally © Joyent.',
	});
});

app.listen(3000)
const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');


const PORT = 3000;

app.listen(PORT, function() {
	console.log(`O express está rodando na porta ${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({ extented: false }));

// db connection
db
	.authenticate()
	.then(() => {
		console.log("Connected to database successfully");
	})
	.catch(err => {
		console.log("Connected to database successfully", err);
	});

// routes
app.get('/', (req, res) => {
	res.send("Está funcionando");
});

// job routes
app.use('/jobs', require('./routes/jobs'));
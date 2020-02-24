const app = require('./app');

const port = 5000;


app.listen(port, (error) => {
	if (error) {
		console.log(error);
	}

	console.log(`Server running on port: ${port}`);
});

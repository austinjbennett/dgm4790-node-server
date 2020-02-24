const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

const errorController = require('./controllers/error');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admins');
const apiRoutes = require('./routes/api');
// const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/api', apiRoutes);
// app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect('mongodb+srv://austinadmjn:EstorilM3@cluster0-j5fa0.mongodb.net/dgm4790?retryWrites=true&w=majority')
	.then(() => {
		app.listen(port);
	}).catch((err) => {
		console.error(err);
	});

module.exports = app;

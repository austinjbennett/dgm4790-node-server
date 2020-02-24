// const mongodb = require('mongodb');
//
// const { MongoClient } = mongodb;
//
// let _db;
//
// const mongoConnect = (callback) => {
// 	MongoClient.connect('mongodb+srv://austinadmjn:EstorilM3@cluster0-j5fa0.mongodb.net/dgm4790?retryWrites=true&w=majority')
// 		.then((client) => {
// 			console.log('Connected!');
// 			_db = client.db();
// 			callback();
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			throw err;
// 		});
// };
//
// const getDb = () => {
// 	if (_db) {
// 		return _db;
// 	}
// 	throw 'No database found!';
// };
//
// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;

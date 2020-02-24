const Product = require('../models/product');

// exports.getAddProduct = (req, res) => {
// 	res.send(`Product Successfully Added: ${req.body.productId}`);
// };
exports.getProducts = (req, res) => {
	Product.find()
		.then((products) => {
			res.send(products);
		})
		.catch((err) => console.error(err));
};

exports.getProduct = (req, res) => {
	const prodId = req.params.productId;
	Product.findById(prodId)
		.then((product) => {
			res.send(product);
		})
		.catch((err) => res.send(err));
};

exports.postAddProduct = (req, res) => {
	const {
		productCategory,
		title,
		imageUrl,
		price,
		description,
	} = req.body;
	const product = new Product({
		productCategory, title, price, description, imageUrl,
	});
	product.save()
		.then((result) => {
			// console.log('Created Product');
			res.send(result);
		})
		.catch((err) => {
			res.send(err);
		});
};

exports.postEditProduct = (req, res) => {
	const updatedProductCategory = req.body.productCategory;
	const prodId = req.body.productId;
	const updatedTitle = req.body.title;
	const updatedPrice = req.body.price;
	const updatedImageUrl = req.body.imageUrl;
	const updatedDesc = req.body.description;

	Product.findById(prodId).then((product) => {
		product.productCategory = updatedProductCategory;
		product.title = updatedTitle;
		product.price = updatedPrice;
		product.description = updatedDesc;
		product.imageUrl = updatedImageUrl;
		return product.save();
	})
		.then((product) => {
			// console.log('UPDATED PRODUCT!');
			res.send(product);
		})
		.catch((err) => res.send(err.message));
};

// exports.putEditProduct = (req, res) => {
// 	const updatedProductCategory = req.body.productCategory;
// 	const prodId = req.body.productId;
// 	const updatedTitle = req.body.title;
// 	const updatedPrice = req.body.price;
// 	const updatedImageUrl = req.body.imageUrl;
// 	const updatedDesc = req.body.description;
//
// 	Product.findById(prodId).then((product) => {
// 		product.productCategory = updatedProductCategory;
// 		product.title = updatedTitle;
// 		product.price = updatedPrice;
// 		product.description = updatedDesc;
// 		product.imageUrl = updatedImageUrl;
// 		return product.save();
// 	})
// 		.then((product) => {
// 			// console.log('UPDATED PRODUCT!');
// 			res.send(product);
// 		})
// 		.catch((err) => res.send(err.message));
// };

exports.postDeleteProduct = (req, res) => {
	const prodId = req.body.productId;
	Product.findByIdAndRemove(prodId)
		.then((product) => {
			res.send('Deleted Product');
			// res.send(product);
		})
		.catch((err) => res.send(err));
};

const express = require('express');

const apiController = require('../controllers/api');

const router = express.Router();

router.get('/products', apiController.getProducts);
router.get('/product/:productId', apiController.getProduct);
router.get('/products/category/:productCategory', apiController.getProductsByCategory);

router.post('/add-product', apiController.postAddProduct);

router.put('/edit-product', apiController.putEditProduct);

router.post('/delete-product', apiController.postDeleteProduct);

module.exports = router;

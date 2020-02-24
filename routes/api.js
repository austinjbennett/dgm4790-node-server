const express = require('express');

const apiController = require('../controllers/api');

const router = express.Router();

// /api/add-product => GET
// router.get('/add-product', adminController.getAddProduct);

// /api/products => GET
router.get('/products', apiController.getProducts);
router.get('/product/:productId', apiController.getProduct);

// /api/add-product => POST
router.post('/add-product', apiController.postAddProduct);

// router.get('/edit-product/:productId', apiController.getEditProduct);

router.post('/edit-product', apiController.postEditProduct);
// router.put('/edit-product', apiController.putEditProduct);

router.post('/delete-product', apiController.postDeleteProduct);

module.exports = router;

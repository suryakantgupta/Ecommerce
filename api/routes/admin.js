const path = require('path');

const express = require('express');

const productsController = require('../controller/products')

const router = express.Router();

router.get('/get-product',productsController.getProducts);
router.post('/add-product',productsController.postAddProduct);
router.get('/get-product/:id',productsController.getProductById);

module.exports = router;
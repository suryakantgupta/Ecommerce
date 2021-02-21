const path = require('path');

const express = require('express');

const productsController = require('../controller/products')

const router = express.Router();

router.get('/add-product',productsController.getProducts)

module.exports = router;
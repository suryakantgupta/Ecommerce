const Product = require('../model/product');

exports.getProducts = (req,res,next) => {
    Product.fetchAll(products => {
        res.send(products)
    })
}
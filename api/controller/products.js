const Product = require('../model/product');

exports.getProducts = (req,res,next) => {
    Product.fetchAll().then((result)=>{
        res.send(result);
    })
}

exports.postAddProduct = (req,res,next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, price, description);
    product.save();
}
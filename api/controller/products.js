const Product = require('../model/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll().then((result) => {
        res.send(result);
    })
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    let imageUrl = req.body.imageUrl;
    imageUrl = `https://drive.google.com/uc?id=${imageUrl.split("/")[5]}`;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, price, description);
    product.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.send(err)
        })

}

exports.getProductById = (req, res, next) => {
    Product.fetchById(parseInt(req.params.id))
    .then((result) => {
        res.send(result)
    })
}
const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), '../', 'data', 'products.json');

const getProductFromFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                reject([]);
            } else {
                resolve(JSON.parse(fileContent));
            }
        })
    });
};

module.exports = class Product {
    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        return new Promise((resolve, reject) => {
            getProductFromFile()
                .then((result) => {
                    this.id = result.length+1;
                    result.push(this);
                    fs.writeFile(p, JSON.stringify(result), err => {
                        // console.error(err);
                        reject("Error in adding product details to database")
                    });
                    resolve("Product Saved")
                })
                .catch((err) => {
                    console.error(err)
                    reject("Error in reading database")
                });
        })
    };

    static fetchAll() {
        return getProductFromFile();
    }

    static fetchById(id) {
        return new Promise((resolve,reject) => {
            getProductFromFile()
            .then((result) => {
                resolve(result.find((product) => product.id === id))
            })
        })
    }
};
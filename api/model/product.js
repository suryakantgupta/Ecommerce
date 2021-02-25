const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename),'../','data','products.json');

const getProductFromFile = ()=> {
    return new Promise((resolve,reject)=>{
        fs.readFile(p,(err,fileContent) => {
            if(err){
                reject([]);
            } else {
                resolve(JSON.parse(fileContent));
            }
        })
    });
};

module.exports = class Product {
    constructor(title,imageUrl,price,description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        getProductFromFile()
        .then((result)=>{
            result.push(this);
            fs.writeFile(p,JSON.stringify(result),err => {
                console.error(err);
            });
        })
        .catch((err)=>{
            console.error(err)
        });
    };

    static fetchAll() {
        return getProductFromFile();
    }
};
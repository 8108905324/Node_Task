const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const Category = require('../model/Category');
const Product = require('../model/product');


router.get('/product', (req, res, next) => {
    getCategory((categoryList) => {
        getProduct(pList => {
            res.render(path.join(rootDir, 'views', 'product.ejs'), {
                data: pList,
                cData: categoryList
            });
        })
    })
})

router.post('/add-product', (req, res, next) => {
    if (req.body.productName !== "" && req.body.categoryId != "") {
        addProduct(req.body.categoryId, req.body.productName, (result) => {
            if (result.affectedRows === 1) {
                res.redirect('/product');
            } else {
                console.log('error in product insertion');
            }
        })
    } else {
        res.redirect('/product');
    }
})

router.post('/update-product', (req, res, next) => {
    if (req.body.productName !== "" && req.body.productId != "") {
        updateProduct(req.body.productName, req.body.productId, (result) => {
            if (result.affectedRows === 1) {
                res.redirect('/product');
            } else {
                console.log('error in product update');
            }
        })
    } else {
        res.redirect('/product');
    }
})

router.get('/delete-product', (req, res, next) => {
    if (req.query.pId != "") {
        deleteProduct(req.query.pId, (result) => {
            if (result.affectedRows === 1) {
                res.redirect('/product');
            } else {
                console.log('error in product delete');
            }
        })
    } else {
        res.redirect('/product');
    }
})

module.exports = router;

function getCategory(cb) {
    const category = new Category();
    category.getAll((categoryList) => {
        cb(categoryList);
    });
}


function getProduct(cb) {
    const product = new Product();
    product.get((pList) => {
        cb(pList);
    });
}

function addProduct(cId, pName, cb) {
    const product = new Product();
    product.insert(cId, pName, (res) => {
        cb(res);
    });
}

function updateProduct(PName, PID, cb) {
    const product = new Product();
    product.update(PName, PID, (res) => {
        cb(res);
    });
}

function deleteProduct(PID, cb) {
    const product = new Product();
    product.delete(PID, (res) => {
        cb(res);
    });
}
const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const Product = require('../model/product');

router.get('/', (req, res, next) => {
    getProduct(pAllList => {
        if (!req.query.p) {
            var start = 0;
        } else {
            var start = (req.query.p - 1) * 10;
        }
        getProductList(start, (pList) => {
            res.render(path.join(rootDir, 'views', 'productList.ejs'), {
                data: pList,
                start: start,
                count: pAllList.length
            });
        })
    })
})

module.exports = router;

function getProduct(cb) {
    const product = new Product();
    product.get((pList) => {
        cb(pList);
    });
}

function getProductList(start, cb) {
    const product = new Product();
    product.getAll(start, (productList) => {
        cb(productList);
    });
}
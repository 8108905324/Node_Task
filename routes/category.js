const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path')
const Category = require('../model/category')

router.get('/category', (req, res, next) => {
    getCategory(categoryList => {
        res.render(path.join(rootDir, 'views', 'category.ejs'), {
            data: categoryList
        });
    })
})

router.post('/add-category', (req, res, next) => {
    if (req.body.categoryName !== "") {
        addCategory(req.body.categoryName, (result) => {
            if (result.affectedRows === 1) {
                res.redirect('/category');
            } else {
                console.log('error in category insertion');
            }
        })
    } else {
        res.redirect('/category');
    }
})

router.post('/update-category', (req, res, next) => {
    if (req.body.categoryName !== "" && req.body.categoryId != "") {
        updateCategory(req.body.categoryName, req.body.categoryId, (result) => {
            if (result.affectedRows === 1) {
                res.redirect('/category');
            } else {
                console.log('error in category update');
            }
        })
    } else {
        res.redirect('/category');
    }
})

router.get('/delete-category', (req, res, next) => {
    if (req.query.cId != "") {
        deleteCategory(req.query.cId, (result) => {
            console.log(result);
            if (result.affectedRows === 1) {
                res.redirect('/category');
            } else {
                console.log('error in category delete');
            }
        })
    } else {
        res.redirect('/category');
    }
})

module.exports = router;

function getCategory(cb) {
    const category = new Category();
    category.getAll((categoryList) => {
        cb(categoryList);
    });
}

function addCategory(cName, cb) {
    const category = new Category();
    category.insert(cName, (res) => {
        cb(res);
    });
}

function updateCategory(CName, CID, cb) {
    const category = new Category();
    category.update(CName, CID, (res) => {
        cb(res);
    });
}

function deleteCategory(CID, cb) {
    const category = new Category();
    category.delete(CID, (res) => {
        console.log(res);
        cb(res);
    });
}
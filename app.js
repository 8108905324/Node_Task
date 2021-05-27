const http = require('http');
const path = require('path');
const rootDir = require('./util/path');
const bodyParser = require('body-parser');
const express = require('express');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const productList = require('./routes/productList');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(rootDir, 'public')));
app.use(productList);
app.use(productRoutes);
app.use(categoryRoutes);
app.use((req, res, next) => {
    res.status(404).render(path.join(rootDir, 'views', '404.ejs'));
})

app.listen(3000);
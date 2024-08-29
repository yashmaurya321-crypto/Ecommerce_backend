const express = require('express');
const router = express.Router();
const {getProductByCategory, getproducts, getPopularProducts, getTopProducts} = require('../controller/ProductController');

router.get('/',getproducts)
router.get('/:category',getProductByCategory)
router.get('/popular',getPopularProducts)
router.get('/top',getTopProducts)


module.exports = router;
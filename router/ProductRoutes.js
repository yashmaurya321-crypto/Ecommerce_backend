const express = require('express');
const router = express.Router();
const {getProductByCategory, getproducts, getPopularProducts, getTopProducts, insertManyProducts} = require('../controller/ProductController');
router.get('/popular',getPopularProducts)
router.get('/top',getTopProducts)
router.get('/',getproducts)
router.get('/:category',getProductByCategory)

router.post('/',insertManyProducts)

module.exports = router;
const path = require('path');
const express = require('express');

const adminCon = require('../controllers/admin');

const router = express.Router();


router.get('/add-product',adminCon.get_test);
router.post('/add-product',adminCon.post_test);
router.get('/prods',adminCon.get_products);
router.get('/cart',adminCon.get_test);
router.get('/orders',adminCon.get_test);


module.exports = router;

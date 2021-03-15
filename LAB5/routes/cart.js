const path = require('path');
const express = require('express');

const adminCon = require('../controllers/cart');

const router = express.Router();


router.get('/cart',adminCon.get_test);
router.post('/cart',adminCon.post_test);

module.exports = router;

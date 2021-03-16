const path = require('path');
const express = require('express');

const ordersCon = require('../controllers/order');

const router = express.Router();


router.get('/',ordersCon.get_test);
// router.post('/add-product',ordersCon.post_test);



module.exports = router;

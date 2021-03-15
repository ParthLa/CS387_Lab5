const path = require('path');
const express = require('express');

const adminCon = require('../controllers/prods');

const router = express.Router();


router.get('/prods',adminCon.get_test);
// router.post('/cart',adminCon.post_test);

module.exports = router;

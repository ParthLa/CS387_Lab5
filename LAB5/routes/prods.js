const path = require('path');
const express = require('express');

const adminCon = require('../controllers/prods');

const router = express.Router();


router.get('/prods',adminCon.get_test);
router.post('/prods',adminCon.post_test);

module.exports = router;

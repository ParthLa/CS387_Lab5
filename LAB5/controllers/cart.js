const Prod = require('../models/prod');
const Cart = require('../models/cart');


exports.get_test = (req,res,next) => {

    var products = Prod.get_all();
        products.then((result) => {
            res.render('cart', {
            pageTitle: 'All Products',
            path: '/cart',
            editing: false,
            products: result.rows
    });
});


};

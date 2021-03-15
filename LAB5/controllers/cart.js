const Prod = require('../models/prod');
const Cart = require('../models/cart');


exports.get_test = (req,res,next) => {

    var products = Cart.get_all();
        products.then((result) => {
            res.render('cart', {
            pageTitle: 'All Products',
            path: '/cart',
            editing: false,
            products: result.rows
    });
});


};

exports.post_test = (req,res,next) => {
    const title = req.body.title;
    const image = req.body.image
    const price = req.body.price;
    const quantity = req.body.quantity;
    const product = new Cart(price, item_id, quantity);
    product
        .add_to_cart()
        .then(() => {
            res.redirect('/cart');
        })
        .catch(err => console.log(err));
};

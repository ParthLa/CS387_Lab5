const Prod = require('../models/prod');
const Cart = require('../models/cart');

exports.get_test = (req,res,next) => {

    var carts = Cart.get_all();
    var credits = Cart.get_cred();

    credits.then((credits) => {
        console.log(credits.rows)
        carts.then((result) => {
            res.render('cart', {
            pageTitle: 'All Products',
            path: '/cart',
            editing: false,
            carts: result.rows,
            credits: credits.rows[0].credit
    });
})});
    //console.log(credits);

};

// exports.post_test = (req,res,next) => {
//     const title = req.body.title;
//     const image = req.body.image
//     const price = req.body.price;
//     const quantity = req.body.quantity;
//     const user_id = req.body.user_id;
//     const item_id = req.body.item_id;
//     const quantity1 = req.body.quantity; // problem
//     const cart_prod = new Cart(1, item_id, quantity);
//     const prod = new Prod(title, image, price, quantity);
//     // cart_prod
//     	// call the -- function...check
//     	if(quantity > 0){
//     		prod.reduce_quantity(item_id)
//     		cart_prod.add_to_cart()
//     		cart_prod.inc_quantity()
//     		cart_prod.then(() => {
//             	res.redirect('/cart');
//         	})
//         	cart_prod.catch(err => console.log(err));
//     	}
//     	else{
//     		prod.then(() => {
//             	res.redirect('/prods');
//         	})
//         	prod.catch(err => console.log(err));
//     	}
//         // .add_to_cart()
//         // .then(() => {
//             // res.redirect('/cart');
//         // })
//         // .catch(err => console.log(err));
// };

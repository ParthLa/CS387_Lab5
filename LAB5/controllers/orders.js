// const Prod = require('../models/prod');
const Cart = require('../models/cart');
const User = require('../models/user');
const Orders = require('../models/orders')


exports.get_test = (req,res,next) => {

    Orders
        .get_all()
        .then((value) => {
            res.render('orders', {
                pageTitle: 'Orders',
                path: '/orders',
                editing: false,
                orders: value.rows
            });
        })
        .catch(err => console.log(err));

    
};

exports.post_test = (req,res,next) => {

    var user_id = 1;

    Cart
        .get_all()
        .then((value) => {
            const carts = value.rows;
            var cartAmount = 0;
            for (i = 0; i < carts.length; i++) { 
                cartAmount += (carts[i]["quantity"] * carts[i]["price"]); 
            }

            const user = new User(user_id);
            user
                .get_creds()
                .then((credit) => {
                    if(cartAmount > credit){
                        res.redirect('/cart');
                        return;
                    }
                })
                .catch(err => console.log(err));

            user.reduce_creds(cartAmount);

            for (i = 0; i < carts.length; i++) { 
                const order = new Orders(user_id, carts[i]["item_id"], carts[i]["quantity"]);
                order
                    .add_to_orders()
                    .then(() => {
                        res.redirect('/orders');
                    })
                    .catch(err => console.log(err));
            }

        })
        .catch(err => console.log(err));

        Cart.delete_all();
};

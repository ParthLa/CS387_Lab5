// const Prod = require('../models/prod');
const Cart = require('../models/cart');
const User = require('../models/user');
const Order = require('../models/order')


exports.get_test = (req,res,next) => {

    Orders
        .get_all()
        .then((value) => {
            res.render('order', {
                pageTitle: 'Orders',
                path: '/order',
                editing: false,
                orderRows: value.rows
            });
        })
        .catch(err => console.log(err));

    
};

// exports.post_test = (req,res,next) => {

//     var user_id = 1;

//     Cart
//         .get_all()
//         .then((value) => {
//             const cartRows = value.rows;
//             var cartAmount = 0;
//             for (index = 0; index < cartRows.length; index++) { 
//                 cartAmount += (cartRows[index]["quantity"] * cartRows[index]["price"]); 
//             }

//             const user = new Users(user_id);
//             user
//                 .get_credits()
//                 .then((credit) => {
//                     if(cartAmount > credit){
//                         res.redirect('/cart');
//                         return;
//                     }
//                 })
//                 .catch(err => console.log(err));

//             user.decrease_credits(cartAmount);

//             for (index = 0; index < cartRows.length; index++) { 
//                 const order = new Orders(user_id, cartRows[index]["item_id"], cartRows[index]["quantity"]);
//                 order
//                     .addToOrders()
//                     .then(() => {
//                         res.redirect('/orders');
//                     })
//                     .catch(err => console.log(err));
//             }

//         })
//         .catch(err => console.log(err));

//         Cart.delete_all();
// };

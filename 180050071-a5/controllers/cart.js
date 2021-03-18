const Prod = require('../models/prod');
const User = require('../models/user');
const Cart = require('../models/cart');
const Orders = require('../models/orders')

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
};

exports.post_test = (req,res,next) => {
     
    var user_id = 1;
    console.log("Ho");

    Cart
        .get_all()
        .then((value) => {
            const carts = value.rows;
            var cartAmount = 0;
            for (i = 0; i < carts.length; i++) { // use query
                cartAmount += (carts[i].qty * carts[i].price); 
                console.log(cartAmount);
            }

            const user = new User(user_id);
            user
                .get_creds()
                .then((credit) => {
                    if(cartAmount > credit){
                        res.redirect('/cart');
                        return;
                    }
                    else{
                        console.log("Hoqnfoqf");
                        user.reduce_creds(cartAmount)
                            // .then(() =>{

                            //     )
    
                        .then(()=>{
                           for (i = 0; i < carts.length; i++) { 
                            const order = new Orders(user_id, carts[i]["item_id"], carts[i]["qty"]);
                            order
                                .add_to_orders()
                                .then(() => {
                                    res.redirect('/orders');
                                })
                                .catch(err => console.log(err));
                            } 
                        })
                        console.log("1934");
                        // for (i = 0; i < carts.length; i++) { 
                        //     const order = new Orders(user_id, carts[i]["item_id"], carts[i]["quantity"]);
                        //     order
                        //         .add_to_orders()
                        //         .then(() => {
                        //             res.redirect('/orders');
                        //         })
                        //         .catch(err => console.log(err));
                        // }
                    }
                })
                .catch(err => console.log(err));

            // user.reduce_creds(cartAmount);

            // for (i = 0; i < carts.length; i++) { 
            //     const order = new Orders(user_id, carts[i]["item_id"], carts[i]["quantity"]);
            //     order
            //         .add_to_orders()
            //         .then(() => {
            //             res.redirect('/orders');
            //         })
            //         .catch(err => console.log(err));
            // }

        })
        .catch(err => console.log(err));

        Cart.delete_all();

     
   
 };

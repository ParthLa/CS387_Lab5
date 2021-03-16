const Prod = require('../models/prod');
const User = require('../models/user');
const Cart = require('../models/cart');
const Order = require('../models/order')

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
     
    Cart
        .get_all()
        .then((value) => {
            const cartRows = value.rows;
            var cartAmount = 0;
            for (i = 0; i < cartRows.length; i++) { 
                cartAmount += (cartRows[i]["quantity"] * cartRows[i]["price"]); 
            }

            const user = new User(1);
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

            for (i = 0; i < cartRows.length; i++) { 
                const order = new Order(user_id, cartRows[i]["item_id"], cartRows[index]["quantity"]);
                order
                    .addToOrders()
                    .then(() => {
                        res.redirect('/order');
                    })
                    .catch(err => console.log(err));
            }

        })
        .catch(err => console.log(err));

        Cart.delete_all();






     
    /*const product_id = req.body.product_id;
    const cart_prod = new Cart(1, product_id);
    const info = Prod.get_info(product_id);
    console.log(info);
  
    //const prod = new Prod(info.title, info.image, info.price, info.quantity);
    //console.log(info);

     	if(info.quantity > 0){
     		Prod.reduce_quantity(product_id);
     		//cart_prod.inc_quantity()
            cart_prod.add_to_cart();
            
            res.redirect('/cart');
         	
            //.catch(err => console.log(err));
     	}
     	else{
     		//cart_prod
    
            //.then(() => {
             	res.redirect('/prods');
         	//})
         	//.catch(err => console.log(err));
     	}
*/
 };
